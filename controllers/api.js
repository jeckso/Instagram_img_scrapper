


const axios = require('axios');
function getImg(url,res){
    var x = url;
    var r = /\\u([\d\w]{4})/gi;
    x = x.replace(r, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16)); } );
    x = unescape(x);
    adr = x;
    console.log(adr);
    axios.get(adr,{
        responseType: 'arraybuffer'
    })
        .then(response => {
            return res.send(Buffer.from(response.data, 'binary').toString('base64'));
        })
        .catch(error => {
            console.log(error);
        });
}
exports.getImg = function(req, res){
    var id = req.params.id;

    var mySubString;
    axios.get('https://www.instagram.com/p/'+id+'/')
        .then(response => {
console.log(response)
            var str = response.data;
            var first = ",\"config_height\":799},{\"src\":\""

             mySubString = str.substring(
                str.lastIndexOf(first) +first.length,
                str.lastIndexOf("\",\"config_width\":750,")
            );
            getImg(mySubString,res);


        })
        .catch(error => {
            console.log(error);
        });

};
