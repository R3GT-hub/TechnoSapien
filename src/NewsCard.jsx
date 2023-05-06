import React from "react";
const newscard=({newnews})=>{
    return (
        <div className="newnews">
            
            <div>
                <div>
                   <h2>{newnews.title}</h2>
                </div>
                <div className="authcom">
                 <p>Author: {newnews.author}</p>
                 <p>Comments: {newnews.num_comments}</p>
                </div>
                <div className="link">
                <a className="link_link" href={newnews.url}rel="noreferrer" target="_blank">Read More</a>
                </div>
                
            </div>
        </div>
    )
}
export default newscard;