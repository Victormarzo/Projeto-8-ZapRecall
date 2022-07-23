import HeadMenu from "./HeadMenu"
import FootMenu from "./FootMenu"
import ZapQuestions from "./ZapQuestions"
import React from "react";

export default function ZapRecall(){
    const [resultList,setResultList]=React.useState([]);
    
    return(
        <>
        <HeadMenu/>
        <ZapQuestions setResultList={setResultList} resultList={resultList}/>
        <FootMenu resultList={resultList}/>
        </>
    )
}