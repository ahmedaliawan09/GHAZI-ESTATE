import React from 'react';

const MercuryText = () => {
    return (
        <div className="w-full bg-green-600 py-4 mb-12">
            <div className="flex justify-centeritems-center text-white text-xl">
                <marquee behavior="scroll" direction="left">
                    For Further Details Contact  <span className="number font-bold text-red-900">+923006043724</span>, Or Click The Whatsapp Icon in Right Bottom. Thank You.
                </marquee>
            </div>
        </div>
    );
}

export default MercuryText;
