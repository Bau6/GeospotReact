import React, { useState } from 'react';
import axios from 'axios';

const AvatarUpload = () => {
    const [avatar, setAvatar] = useState(null);

    const handleAvatarChange = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('avatar', file);

        try {
            const response = await axios.post('http://localhost:3003/upload-avatar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Обновить состояние с путем к загруженному файлу
            setAvatar(response.data.avatarPath);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleAvatarChange} />
            {avatar && <img src={avatar} alt="Avatar" />}
        </div>
    );
};

export default AvatarUpload;