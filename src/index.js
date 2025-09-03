
const CityRepository=require('./repository/city-repository')
const {PORT,express}=require('./config/serverConfig');
const { urlencoded } = require("body-parser");


const setupAndStartServer=async()=>{
    const app=express();

    app.use(express.json());
    app.use(urlencoded({extended:true}))
    app.listen(PORT,async()=>{
    console.log(`${PORT} has started..`);
    const repo=new CityRepository();
    // repo.createCity({
    //     name:"New Delhi"
    // })
    })

}
setupAndStartServer();