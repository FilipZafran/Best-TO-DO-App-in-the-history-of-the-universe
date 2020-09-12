import React from 'react';
import { motion } from 'framer-motion';

 

const GorillaSurfOut = () => {

        return (
            <div 
                id='movingGorilla'>
                
                <motion.img
                    initial={{ x: 500, y: 50,}}
                    animate={{
                                            x: 600, y: 0,
                        transition: { duration: 2 }
                    }} 
                    id='gorillaSurfGif'
                    src={require('../images/surfing_gorilla.gif')} />
                
            </div>);

    
}

export default GorillaSurfOut; 

