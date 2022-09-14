#include "jswrap_infxl.h"
#include "infxl.h"

// Let's define the JavaScript class that will contain our `model()` method. We'll call it `Hello`
/*JSON{
  "type" : "class",
  "class" : "Infxl"
}*/

/*JSON{
  "type" : "staticmethod",
  "class" : "Infxl",
  "name" : "model",
  "generate" : "jswrap_puck_infXL",
  "return" : ["int", "ID of most probably classification" ]
}
Calls the infXL model and returns its prediction.
*/
JsVarInt jswrap_puck_infXL() {
  uint8_t ret = run_infxl_model();
  
  return ((JsVarInt)ret) ;
}


/*JSON{
  "type" : "staticmethod",
  "class" : "Infxl",
  "name" : "insert",
  "generate" : "jswrap_puck_infXL_insert",
      "params" : [
      ["index","int",""],
      ["ax","int",""],
      ["ay","int",""],
      ["az","int",""]
    ],
  "return" : ["int", "0 if successful else some vague error code" ]
}
Calls the infXL model and returns its prediction.
*/
JsVarInt jswrap_puck_infXL_insert(JsVarInt index, JsVarInt ax, JsVarInt ay, JsVarInt az) {
  int8_t ret = insert_infxl_measurement(index, ax, ay, az);

  return ((JsVarInt)ret) ;
}

