import { createElement, useRef, useState, useLayoutEffect } from "react";

import "../ui/CustomButtons.css";

export function Button({ textButton, classButton, buttonAction, textColor, borderColor, fillColor }) {
    const targetRef = useRef();

    useLayoutEffect(() => {
        if (targetRef.current) {
            targetRef?.current?.style.setProperty("--widt", targetRef.current.offsetWidth + "px");
            targetRef?.current?.style.setProperty("--heigh", targetRef.current.offsetHeight + "px");
            targetRef?.current?.style.setProperty("--txtCol", textColor ? textColor : "#000");
            targetRef?.current?.style.setProperty("--bCol", borderColor ? borderColor : "#000");
            targetRef?.current?.style.setProperty("--fCol", fillColor ? fillColor : "#ffdc7f");
        }
    }, []);

    let classesName = [classButton, "customButton"].join(" ");

    function buttonClicked() {
        buttonAction.execute();
    }

    return (
        <button ref={targetRef} className={classesName} onClick={buttonClicked}>
            {textButton}
        </button>
    );
}
