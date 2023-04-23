import React from "react";

function Footer(){
    const date = new Date();
    var year = date.getFullYear();    
    return <p>
        copyright {year}
    </p>
}
export default Footer;