function _0x9000(){const _0x4cfc21=['slice','Error\x20fetching\x20video:','2820iYAabh','statusText','321362dqgpMm','sendMessage','get','React','includes','content-type','arrayBuffer','4671562acBgjU','No\x20video\x20found\x20in\x20supported\x20quality.','facebook','Error\x20downloading\x20video.','trim','log','90sJfRIx','reply','error','startsWith','The\x20video\x20file\x20size\x20exceeds\x20300MB.','video','PREFIX','11499pqyGiE','Video\x20caption\x20used:','headers','*DOWNLOADED\x20BY\x20SARKAR-MD*','video/mp4','772HedmLr','fbData:','Please\x20provide\x20a\x20Facebook\x20video\x20URL.','8KrLPQe','Failed\x20to\x20fetch\x20the\x20video:\x20','207605BvfVQi','toLowerCase','30249pPhjVf','1009419mCHNsG','12854655YwKFhB','from','body','Error\x20processing\x20your\x20request.','length'];_0x9000=function(){return _0x4cfc21;};return _0x9000();}(function(_0x11893b,_0x7bb17e){const _0x32afea=_0x2452,_0x337a5f=_0x11893b();while(!![]){try{const _0x4b72d7=parseInt(_0x32afea(0x1e5))/0x1+-parseInt(_0x32afea(0x1c4))/0x2+parseInt(_0x32afea(0x1d8))/0x3*(parseInt(_0x32afea(0x1dd))/0x4)+-parseInt(_0x32afea(0x1e2))/0x5*(parseInt(_0x32afea(0x1d1))/0x6)+-parseInt(_0x32afea(0x1cb))/0x7*(parseInt(_0x32afea(0x1e0))/0x8)+-parseInt(_0x32afea(0x1e4))/0x9*(parseInt(_0x32afea(0x1c2))/0xa)+parseInt(_0x32afea(0x1e6))/0xb;if(_0x4b72d7===_0x7bb17e)break;else _0x337a5f['push'](_0x337a5f['shift']());}catch(_0x37bf39){_0x337a5f['push'](_0x337a5f['shift']());}}}(_0x9000,0x7ebd9));import _0x225318,{prepareWAMessageMedia}from'@whiskeysockets/baileys';const {generateWAMessageFromContent,proto}=_0x225318;import _0x4e7231 from'@xaviabot/fb-downloader';import _0x27de98 from'../../config.cjs';import _0x4f2dee from'node-fetch';const facebookCommand=async(_0x9f5658,_0x5a6ed2)=>{const _0x2a1195=_0x2452,_0x589107=_0x27de98[_0x2a1195(0x1d7)],_0x23bc1e=_0x9f5658['body'][_0x2a1195(0x1d4)](_0x589107)?_0x9f5658[_0x2a1195(0x1bd)]['slice'](_0x589107['length'])['split']('\x20')[0x0][_0x2a1195(0x1e3)]():'',_0x4c86dc=_0x9f5658[_0x2a1195(0x1bd)][_0x2a1195(0x1c0)](_0x589107[_0x2a1195(0x1bf)]+_0x23bc1e[_0x2a1195(0x1bf)])[_0x2a1195(0x1cf)](),_0x9a473=[_0x2a1195(0x1cd),'fb','fbdl'];if(_0x9a473['includes'](_0x23bc1e)){if(!_0x4c86dc)return _0x9f5658['reply'](_0x2a1195(0x1df));try{await _0x9f5658[_0x2a1195(0x1c7)]('🕘');const _0x3c734c=await _0x4e7231(_0x4c86dc);console[_0x2a1195(0x1d0)](_0x2a1195(0x1de),_0x3c734c);if(!_0x3c734c){await _0x9f5658[_0x2a1195(0x1d2)]('No\x20results\x20found.'),await _0x9f5658['React']('❌');return;}const _0x14e159=_0x3c734c['hd']||_0x3c734c['sd'];if(!_0x14e159){await _0x9f5658[_0x2a1195(0x1d2)](_0x2a1195(0x1cc)),await _0x9f5658[_0x2a1195(0x1c7)]('❌');return;}const _0x35537e=await getStreamBuffer(_0x14e159),_0x2ccfe3=_0x35537e[_0x2a1195(0x1bf)]/(0x400*0x400),_0x25c4d6=_0x2a1195(0x1db);console['log'](_0x2a1195(0x1d9),_0x25c4d6);if(_0x2ccfe3<=0x12c){const _0x1d4cfe={'video':_0x35537e,'mimetype':_0x2a1195(0x1dc),'caption':_0x25c4d6};await _0x5a6ed2[_0x2a1195(0x1c5)](_0x9f5658[_0x2a1195(0x1e7)],_0x1d4cfe,{'quoted':_0x9f5658}),await _0x9f5658[_0x2a1195(0x1c7)]('✅');}else await _0x9f5658[_0x2a1195(0x1d2)](_0x2a1195(0x1d5)),await _0x9f5658['React']('❌');}catch(_0x47dbb4){console[_0x2a1195(0x1d3)]('Error\x20processing\x20your\x20request:',_0x47dbb4),await _0x9f5658[_0x2a1195(0x1d2)](_0x2a1195(0x1be)),await _0x9f5658['React']('❌');}}},getStreamBuffer=async _0x45a743=>{const _0x4bed57=_0x2452;try{const _0x38bb91=await _0x4f2dee(_0x45a743);if(!_0x38bb91['ok'])throw new Error(_0x4bed57(0x1e1)+_0x38bb91[_0x4bed57(0x1c3)]);const _0x4db993=_0x38bb91[_0x4bed57(0x1da)][_0x4bed57(0x1c6)](_0x4bed57(0x1c9));if(!_0x4db993[_0x4bed57(0x1c8)](_0x4bed57(0x1d6)))throw new Error('URL\x20does\x20not\x20contain\x20a\x20video\x20stream.');const _0x3b8de6=await _0x38bb91[_0x4bed57(0x1ca)]();return Buffer[_0x4bed57(0x1e7)](_0x3b8de6);}catch(_0xa665f1){console[_0x4bed57(0x1d3)](_0x4bed57(0x1c1),_0xa665f1);throw new Error(_0x4bed57(0x1ce));}};function _0x2452(_0x452a55,_0xb4031a){const _0x9000b2=_0x9000();return _0x2452=function(_0x2452a2,_0x1eb6e5){_0x2452a2=_0x2452a2-0x1bd;let _0xf063e5=_0x9000b2[_0x2452a2];return _0xf063e5;},_0x2452(_0x452a55,_0xb4031a);}export default facebookCommand;
