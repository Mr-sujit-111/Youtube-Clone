import React from 'react'
const style = {
    paddingTop: "30px",
    paddingBottom: "30px",
}

function Footer() {
    return (
        <center>
            <div className="container footer-bottom clearfix" style={style}>
                <div className="copyright">
                    © Copyright <strong><span>Sujit Bhanderi</span></strong>. All Rights Reserved
                </div>
            </div>
        </center>
    )
}

export default Footer