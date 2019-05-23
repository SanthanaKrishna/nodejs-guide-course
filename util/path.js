const path=require('path');

//mainmodule=> is app.js
//__dirname, '../'  
module.exports=path.dirname(process.mainModule.filename)