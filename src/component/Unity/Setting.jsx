import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TbSettingsX } from "react-icons/tb";
const Setting = () => {
    return (
        <div className='min-h-screen text-center items-center flex'>
            <Helmet>
                <title>Crestview | setting</title>
            </Helmet>
            <h1 className='text-[300px] mx-auto'> <TbSettingsX /></h1>
        </div>
    );
};

export default Setting;