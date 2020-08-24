const {injectBabelPlugin} = require()
module.exports=function override(config,env){
   //do stuff with the webpack config..
   config = injectBabelPlugin(
       [
           'import',{
               libararyName:'antd',
               liabraryDirectory:'es',
               style:'css'
           }
       ],
       config,
   );
    return config;
};