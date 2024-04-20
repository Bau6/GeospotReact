import axios from "axios";
import relation from "./relation";
// import * as infologActions from "./infolog";
// import * as userActions from "./user";
export const ON_BEFORE = "_BEFORE";
export const ON_AFTER = "_AFTER";
export const ON_ERROR = "_ERROR";


function createAxios(contentType) {
    return axios.create({
        baseURL: "http://localhost:3003/",
        mode: "cors",
        headers: {
            "Content-Type": contentType,
            Authorization: "",
        },
        responseType: "json",
    });
}
// put изменение get получение del удаление post добавление
export const api = createAxios("application/json; charset=utf-8");

export function get(path, params, actionType) {
    return async function (dispatch) {
        try {
            dispatchBefore(dispatch, actionType, params);
            const res = await api.get(path, {params});
            dispatchAfter(dispatch, actionType, params, res.data);
        } catch (error) {
            dispatchError(dispatch, actionType, error);
        }
    };
}

export function post(path, data, params, actionType) {
    return async function (dispatch) {
        try {
            dispatchBefore(dispatch, actionType, params);
            const res = await api.post(path, data, {params});
            dispatchAfter(dispatch, actionType, params, res.data);
        } catch (error) {
            dispatchError(dispatch, actionType, error);
        }
    };
}

export function put(path, data, params, actionType) {
    return async function (dispatch) {
        try {
            dispatchBefore(dispatch, actionType, params);
            const res = await api.put(path, data, {params});
            dispatchAfter(dispatch, actionType, params, res.data);
        } catch (error) {
            dispatchError(dispatch, actionType, error);
        }
    };
}

export function del(path, params, actionType) {
    return async function (dispatch) {
        try {
            dispatchBefore(dispatch, actionType, params);
            const res = await api.delete(path, {params});
            dispatchAfter(dispatch, actionType, params, res.data);
        } catch (error) {
            dispatchError(dispatch, actionType, error);
        }
    };
}

export function dispatchBefore(dispatch, actionType, params) {
    relation(dispatch, {type: actionType + ON_BEFORE, params});
}

export function dispatchAfter(dispatch, actionType, params, data) {
    dispatch({type: actionType, params, data});
    relation(dispatch, {type: actionType + ON_AFTER, params, data});
}

export function dispatchError(dispatch, actionType, error) {
    let message;
    let status = 0;
    if (error.response) {
        status = error.response.status;
        switch (status) {
            case 401:
                message = "";
                dispatchAfter(dispatch, userActions.OBJECT + userActions.ACTION_LOGOUT);
                break;
            case 404:
                message = "Не доступен сервер или отдельные его части";
                break;
            case 413:
                message = "Размер передаваемого файла превышает ограничения сервера";
                break;
            default:
                try {
                    if (error.response.data && error.response.data.message)
                        message = error.response.data.message;
                    else
                        message = `Ошибка при обращении к серверу: ${error.response.status} ${error.response.statusText}`;
                } catch (e) {
                    message = `Необработанная ошибка: ${error.response}`;
                }
                break;
        }
    } else message = error.toString();

    relation(dispatch, {type: actionType + ON_ERROR, message, status});
    // dispatch(infologActions.add(infologActions.TYPE_ERROR, message));
}

// export function longpolling(path, params, actionType) {
//     return async function (dispatch) {
//         try {
//             let res = {};
//             /* eslint-disable-next-line */
//             while (true) {
//                 try {
//                     dispatchBefore(dispatch, actionType, params);
//                     const p = {params: {...params, ts: res.data ? res.data.ts : 0}};
//                     res = await api.get(path, p);
//                     dispatchAfter(dispatch, actionType, params, res.data.data);
//                     setTimeout(100);
//                 } catch (e) {
//                     break;
//                 }
//             }
//         } catch (error) {
//             dispatchError(dispatch, actionType, error);
//         }
//     };
// }
// export function download(path, params, actionType) {
//     return async function (dispatch) {
//         try {
//             dispatchBefore(dispatch, actionType, params);
//             const res = await api.get(path, {params, responseType: "blob"});
//             dispatchAfter(dispatch, actionType, params, res);
//         } catch (error) {
//             const data = JSON.parse(await error.response.data.text());
//             dispatchError(dispatch, actionType, {
//                 response: {status: data.status, data},
//             });
//         }
//     };
// }