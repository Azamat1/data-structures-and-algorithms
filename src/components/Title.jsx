import React from "react";

function Title(props) {
    const { left, right, center } = props;

    return (
        <div className="title">
            {
                left && (
                    <div className="title__item-left">
                        {left}
                    </div>
                )
            }
            {
                center && (
                    <div className="title__item-center">
                        {center}
                    </div>
                )
            }
            {
                right && (
                    <div className="title__item-right">
                        {right}
                    </div>
                )
            }
        </div>
    );
}

export default Title;