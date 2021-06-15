import { GifGrid } from "./componets/GifGrid";

const { Fragment, useState } = require("react");
const { AddCategory } = require("./componets/AddCategory");

const GitExpertApp = ()=>{

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories,setCategories] = useState(['One Punch']);

    //const handleAdd = ()=>{

        //setCategories([...categories,'HunterX']);
        //setCategories(cats =>[...cats,'HUnterXHunter'])

    //};

    return (
        <Fragment>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category =>
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }    
            </ol>   
        </Fragment>

    );

}

export default GitExpertApp;