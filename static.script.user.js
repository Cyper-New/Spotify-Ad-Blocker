// ==UserScript==
// @name         Spotify Ad Blocker Client [XLX - 2020]
// @namespace    https://github.com/Cyper-New/
// @version      v2
// @description  Spotify ADs Blocker Tools & Sound Ads
// @description:en  Spotify ADs Blocker Tools & Sound ADs
// @description:ar  أدوات حظر إعلانات البرنامج الصوتي سبوتفي وحظر الإعلانات الصوتية
// @author       XLX - 2020
// @match        *://open.spotify.com/*
// @icon         https://open.spotify.com/favicon.ico
// @copyright    XLX - 2020
// @license      MIT
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @run-at       document-start
// @grant        none
// ==/UserScript==



/**
 * @copyright (c) XLX - 2020
 * @license MIT License (MIT) - (NC|NR 2020 - 2021)
 * @version (v2)
 * @PackageFile {-22 | -31 | -0}
 * @certificate {X}
 */

/****************************************************************

 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  If You Have Any Problems With Script Contact Me At Discord :"

  Discord  : Cyper#6887
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


****************************************************************/


~(function Spotify(window) {


    if (!('includes' in Array.prototype)) return alert('Your Broswer does not  Support Features and Tools That Scripts is Using. \n Please Update Your Broswer or Install Newer Broswer. \n\n\f المتصفح لايدعم أدوات ومميزات الشفرة يرجئ تحديث او تحميل متصفح جديد يدعم ES6\f');


   /**
    * @type {Object} Configuration
   **/

    var Configuration = {
        Version: " v2",
        Source: "https://open.scdn.co/cdn/build/web-player/vendor~web-player.9f10e3fc.js",
        MatchVendorsCore: /(http|https)\W+(open\.\w+\.\w+\/cdn\/build\/(\w+\W+\w+)\/vendor~web\-player\.(\w+)\.js)/,
        defualtServerURL: "wss://gae-dealer.spotify.com",
      };

   /**
    * @instanceof {Map} HookList
   **/

    var HookList = new Map()

        .set("Exetute ADs Patch", {
            regex:/(([\u0066][\u006F][\u0072][\u006d][\u0061][\u0074][\u0041][\u0064])\((.+?)\)\{if\(\!\w+\W+\w+([a-z!=\.]){8}\w+\.\w+\.\w+&&.+?n\.dur\w+\,\d+\W+\w+(\W{2})\d+\W{2})/gi,
            execute: "$2\u0028\u006e\u0063\u0069\u002c\u0065\u006c\u0073\u0029\u007b\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u006e\u0063\u0069\u0026\u0026\u0074\u0068\u0069\u0073\u002e\u0067\u0065\u0074\u0053\u0074\u0072\u0065\u0061\u006d\u0053\u0065\u0063\u0072\u0065\u0074\u004b\u0065\u0079\u007d"
         })
        .set("Crypto Algorithm" , {
           regex:/\w+.prototype\W+getPrivateKey/m,
           execute: "$&"
        })


   /**
    * @class LoadPage
    * @constructor
    * @param {String} coreSource
   **/

    class LoadPage {

        constructor(coreSource) {
            this.coreSource = (coreSource);
            this.load();
        }

        /**
         * @param {String} url
         * @param {String} [method=get]
         * @param {Function} handler
        **/

        request(url, method, handler) {
            const xhr = new XMLHttpRequest();
            xhr && xhr.open && xhr.open(method, url);
            xhr && xhr.send && xhr.send();
            return (xhr.onload = () => {
                const Patched = this.Patch(xhr.responseText);
                return (handler)(Patched)();
            });
        }



        load() {
            this.request(this.coreSource, 'get', Function);
        }

        /**
         * @param {String} <[code=null]>
        **/

        Patch(code) {
            for (var [...Hooks] of HookList) {
                if (!Hooks[0x1].regex.exec(code))
                    return confirm("Failed to inject " + Hooks[0x0] + "Press OK to Reload Page. \n حدث خطأ اثناء حقن الشفرة اضغط حسنا لإعادة تحميل الصفحة") && location.reload();
                else {
                    code = code.replace(Hooks[0x1].regex, Hooks[0x1].execute);
                    (console.info.name == "info" && console.info || console.dir)(`Injected ${Hooks[0x0]} Successfully!`);
                }
            }
            return (code);
        }
    }

    /**
     * @type {Number} tick
    **/
    var tick = (0x0);

    new MutationObserver((Mutations) => {
            Mutations.forEach(({
                addedNodes
            }) => {
                addedNodes.forEach((node) => {

                    try {
                        if (node && node.tagName && node instanceof HTMLScriptElement) {


                             if (!tick && node.src && node.src.match(Configuration.MatchVendorsCore)) {

                                node.type = ("blocked/javascript");

                                new LoadPage(node.src);

                                tick++;
                            }
                        }
                    } catch (errorTrace) {
                        errorTrace.stack = errorTrace.stack.replace(/(\]\)|\d+|\w+)|userscript|chrome|extension/g);
                        throw (errorTrace);
                    }
                })
            })
        })
        .observe(document.documentElement, {
            subtree: true,
            childList: true
        });



})(window);

//....................../´¯/)
//....................,/¯../
//.................../..../
//............./´¯/'...'/´¯¯`·¸
//........../'/.../..../......./¨¯\
//........('(...´...´.... ¯~/'...')
//.........\.................'...../
//..........''...\.......... _.·´
//............\..............(
//..............\.............\...
// © Made By (~~ ## Cyper ) 2020 - 2021
