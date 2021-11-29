import React from "react";
import ArticlesList from "../components/ArticlesList";

import articleContent from './article-content';


const ArticleList=()=>(
           <>
                <h1>Articles </h1>
               <ArticlesList articles={articleContent}/> 
           </>
);
export default ArticleList;