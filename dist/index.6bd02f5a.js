/**
 * 
 * 
 * ReactElement(Object) = HTML [ Browser Understands ]
 * 
 * createElement = it return an object [ tag , objects (props), children( normal react element or list || array )]
 */ // const heading = React.createElement("h1", {id: "heading", className: "hii"}, "Hello World by React !!!!");
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "Hello this is h1 tag"),
        React.createElement("h2", {}, "Hello this is h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "Hello this is h1 tag"),
        React.createElement("h2", {}, "Hello this is h2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
