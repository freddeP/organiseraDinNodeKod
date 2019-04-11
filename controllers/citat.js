
// data som egentligen skall ligga i databas eller fil...
const data = [{id:1, name:"Allt går med lite fysik!"},
            {id:2, name:"Det är aldrig försent att ge upp"}];


module.exports = class citat{

    // Controller som spottar ut alla citat ur citat-tabellen
    static index(req,res){
        res.send(data.reverse());
    }

    // Controller som visar ett citat med ett visst id  citat/:id
    static show(req,res){
        const id = req.params.id;
        const result =  data.filter(el => id == el.id);        
        res.send(result);
    }
    // Controller som skickar create.html så att vi kan skapa nya citat
    static create(req,res){
        res.sendFile(process.cwd()+"/create.html");
    }

    // Controller för en post-route som sparar i data-arrayen längst upp.
    static store(req,res){
        let obj = {};
        obj.id = data.length+1;
        obj.name = req.body.citat;
        data.push(obj);
        res.redirect("/citat");
    }

}

