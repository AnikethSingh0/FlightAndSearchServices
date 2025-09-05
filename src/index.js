
const CityRepository=require('./repository/city-repository')
const {PORT,express}=require('./config/serverConfig');
const { urlencoded } = require("body-parser");
const cityRoutes = require('./routes/index')

const setupAndStartServer=async()=>{
    const app=express();

    app.use(express.json());
    app.use(urlencoded({extended:true}))

    app.use('/api',cityRoutes);

    app.listen(PORT,async()=>{
    console.log(`${PORT} has started..`);
    })

}
setupAndStartServer();