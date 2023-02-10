const scrollInto = (location : string) => {
    let obj : any = document.getElementById(location);
    if (obj !== null) {
        obj.scrollIntoView({behavior: "smooth"});
    }
}

export {scrollInto};