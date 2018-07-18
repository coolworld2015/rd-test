import React from 'react';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';

const Conteiner = () => {
    return (
        <div>
			<div className="top-c">
				<Top />
			</div>
			
			<div className="middle-c">
				<Middle />
			</div>

			<div className="bottom-c">
				<Bottom />
			</div>
        </div>
    )
};

export default Conteiner;