// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
'use strict';

function counter() {
  var wins = 0;
  var losses = 0;
  var ties = 0;
  var Money = 10000;
  var Games = 1000;
  var _loop = function _loop() {
    if (Money <= 0) {
      return "break";
    }
    var i = 0;
    var NumberOfRounds = 100000;
    var currentBet = 5;
    var RunningCount = 0;
    var Shoes = 10;
    var Shoe = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    var DecksInShoe = Shoe.length / 52;
    var CardsRemaining = Shoe.length;
    var _loop2 = function _loop2() {
      var Splitting = false;
      var Hands = [];
      var info = [];
      var TrueCount = RunningCount / DecksInShoe;
      var SoftPlayersHand = false;
      var SoftDealersHand = false;
      var DoubleAces = false;
      var FirstSoft = false;
      var SecondSoft = false;
      function GetRandomCard() {
        var RandomSelectedNumber = Math.floor(Math.random() * (CardsRemaining - 1)) + 1;
        var RandomCard = Shoe[RandomSelectedNumber];
        Shoe.splice(RandomSelectedNumber, 1);

        //console.log(RandomCard);

        CardsRemaining = Shoe.length;
        DecksInShoe = CardsRemaining / 52;
        if ([2, 3, 4, 5, 6].includes(RandomCard)) {
          RunningCount += 1;
        } else if ([10, "Ace"].includes(RandomCard)) {
          RunningCount -= 1;
        }
        if (CardsRemaining <= 5) {
          Shoes -= 1;
          Shoe = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
          CardsRemaining = Shoe.length;
          //console.log(`There are ${Shoes} shoes left!`);
        }

        TrueCount = RunningCount / DecksInShoe;
        return RandomCard;
      }
      var DealersCard = GetRandomCard();
      if (DealersCard == "Ace") {
        DealersCard = 11;
        SoftDealersHand = true;
      }
      var FirstCard = GetRandomCard();
      var SecondCard = GetRandomCard();
      if (FirstCard == SecondCard) {
        Splitting = true;
      }
      if (FirstCard == "Ace" && SecondCard == "Ace") {
        SoftPlayersHand = true;
        DoubleAces = true;
        FirstCard = 11;
        SecondCard = 1;
      }
      if (FirstCard == "Ace") {
        SoftPlayersHand = true;
        if (SecondCard <= 10) {
          FirstCard = 11;
        } else {
          FirstCard = 1;
        }
      }
      if (SecondCard == "Ace") {
        SoftPlayersHand = true;
        if (FirstCard <= 10) {
          SecondCard = 11;
        } else {
          SecondCard = 1;
        }
      }
      var PlayersHand = FirstCard + SecondCard;
      Hands = [PlayersHand];

      //PLAING OPTIONS

      //Hit
      function Hit(PlayersHand, Soft) {
        var ThirdCard = GetRandomCard();
        if (ThirdCard == "Ace") {
          if (PlayersHand <= 10) {
            ThirdCard = 11;
            SoftPlayersHand = true;
          } else {
            ThirdCard = 1;
          }
        }
        PlayersHand = PlayersHand + ThirdCard;
        if (Soft == true && PlayersHand > 21) {
          PlayersHand -= 10;
          Soft = false;
        }

        //console.log("After Hitting: ", PlayersHand);

        return [PlayersHand, Soft];
      }

      //Double Down
      function DoubleDown(PlayersHand, SoftPlayersHand, DealersHand, SoftDealersHand) {
        currentBet = currentBet * 2;
        info = Hit(PlayersHand, SoftPlayersHand);
        PlayersHand = info[0];
        SoftPlayersHand = info[1];
        info = [];
        Stand(PlayersHand, DealersHand, SoftDealersHand);
        currentBet = currentBet / 2;
        return PlayersHand;
      }

      //Stand
      function Stand(PlayersHand, DealersHand, SoftDealersHand) {
        info = Hit(DealersHand, SoftDealersHand);
        DealersHand = info[0];
        SoftDealersHand = info[1];
        info = [];
        if (PlayersHand == "BlackJack") {
          if (DealersHand == 21) {
            //Push
            SoftPlayersHand = false;
            ties += 1;
            return;
          } else {
            BlackJack(currentBet);
            return;
          }
        }
        while (DealersHand < 17) {
          info = Hit(DealersHand, SoftDealersHand);
          DealersHand = info[0];
          SoftDealersHand = info[1];
          info = [];
        }
        if (DealersHand > 21 && SoftDealersHand == false) {
          PlayerWins(currentBet);
          return;
        } else if (DealersHand > 21 && SoftDealersHand == true) {
          DealersHand = DealersHand - 10;
          while (DealersHand < 17) {
            info = Hit(DealersHand, SoftDealersHand);
            DealersHand = info[0];
            SoftDealersHand = info[1];
            info = [];
          }
          if (DealersHand > 21) {
            PlayerWins(currentBet);
            return;
          }
        }
        if (PlayersHand == DealersHand) {
          SoftPlayersHand = false;
          ties += 1;
          return;
        } else if (PlayersHand > DealersHand) {
          PlayerWins(currentBet);
          return;
        } else if (PlayersHand < DealersHand) {
          PlayerLooses(currentBet);
          return;
        }
      }
      function Split(FirstCard, SecondCard, SoftPlayersHand) {
        var FirstCard1 = FirstCard;
        var FirstCard2 = SecondCard;
        var SecondCard1 = GetRandomCard();
        var SecondCard2 = GetRandomCard();
        var FirstSoft = false;
        var SecondSoft = false;
        if (SoftPlayersHand == true) {
          if (FirstCard1 == 11) {
            //FirstCard is Ace
            FirstSoft = true;
          }
          if (FirstCard2 == 11 || FirstCard2 == 1) {
            //SecondCard is Ace
            SecondSoft = true;
            if (FirstCard2 = 1) {
              FirstCard2 = 11;
            }
          }
        }
        if (FirstCard1 == 11 && SecondCard1 == "Ace") {
          FirstSoft = true;
          FirstCard1 = 11;
          SecondCard1 = 1;
        }
        if (FirstCard2 == 11 && SecondCard2 == "Ace") {
          SecondSoft = true;
          FirstCard2 = 11;
          SecondCard2 = 1;
        }
        if (SecondCard1 == "Ace") {
          FirstSoft = true;
          if (FirstCard1 <= 10) {
            SecondCard1 = 11;
          } else {
            SecondCard1 = 1;
          }
        }
        if (SecondCard2 == "Ace") {
          SecondSoft = true;
          if (FirstCard2 <= 10) {
            SecondCard2 = 11;
          } else {
            SecondCard2 = 1;
          }
        }
        var PlayersHand1 = FirstCard1 + SecondCard1;
        var PlayersHand2 = FirstCard2 + SecondCard2;
        return [[PlayersHand1, PlayersHand2], FirstSoft, SecondSoft];
      }

      //BlackJack
      function BlackJack(currentBet) {
        Money += currentBet * 1.5;
        SoftPlayersHand = false;
        wins += 1;
        return;
      }

      //Win
      function PlayerWins(currentBet) {
        Money += currentBet;
        SoftPlayersHand = false;
        wins += 1;
        return;
      }

      //Loss
      function PlayerLooses(currentBet) {
        Money -= currentBet;
        SoftPlayersHand = false;
        losses += 1;
        return;
      }

      //Splitting
      if (Splitting == true) {
        if (DoubleAces == true || PlayersHand == 16 || PlayersHand == 18 && (2 <= DealersCard && DealersCard <= 6 || DealersCard == 8 || DealersCard == 9) || PlayersHand == 14 && DealersCard >= 2 && DealersCard <= 7 || PlayersHand == 12 && 2 <= DealersCard && DealersCard <= 6 || (PlayersHand == 6 || PlayersHand == 4) && 2 <= DealersCard && DealersCard <= 7) {
          var data = Split(FirstCard, SecondCard, SoftPlayersHand);
          Hands = data[0];
          FirstSoft = data[1];
          SecondSoft = data[2];
        }
      }

      //PLAYER'S ALGORITHM

      for (var l = 0; l < Hands.length; l++) {
        PlayersHand = Hands[l];
        var DealersHand = DealersCard;
        if (Hands.length == 2) {
          if (l == 0) {
            SoftPlayersHand = FirstSoft;
          }
          if (l == 1) {
            SoftPlayersHand = SecondSoft;
          }
        }
        if (SoftPlayersHand == false) {
          if (PlayersHand == 11 || PlayersHand == 10 && DealersCard <= 9 || PlayersHand == 9 && 3 <= DealersCard && DealersCard <= 6) {
            //Double Down
            PlayersHand = DoubleDown(PlayersHand, SoftPlayersHand, DealersHand, SoftDealersHand);
          } else if (PlayersHand >= 17 || 13 <= PlayersHand && DealersCard <= 6 || PlayersHand == 12 && 4 <= DealersCard && DealersCard <= 6) {
            //Stand
            Stand(PlayersHand, DealersHand, SoftDealersHand);
          } else {
            //Hit
            while (17 > PlayersHand) {
              info = Hit(PlayersHand, SoftPlayersHand);
              PlayersHand = info[0];
              SoftPlayersHand = info[1];
              info = [];
            }
            if (PlayersHand > 21) {
              PlayerLooses(currentBet);
            } else {
              Stand(PlayersHand, DealersHand, SoftDealersHand);
            }
          }
        }
        if (SoftPlayersHand == true) {
          if (PlayersHand == 21) {
            //BlackJack
            PlayersHand = "BlackJack";
            Stand(PlayersHand, DealersHand, SoftDealersHand);
          } else if (PlayersHand <= 19 && DealersCard == 6 || PlayersHand <= 18 && DealersCard == 5 || 15 <= PlayersHand && PlayersHand <= 18 && DealersCard == 4 || (PlayersHand == 17 || PlayersHand == 18) && DealersCard == 3 || PlayersHand == 18 && DealersCard == 2) {
            // Double Down
            PlayersHand = DoubleDown(PlayersHand, SoftPlayersHand, DealersHand, SoftDealersHand);
          } else if (PlayersHand >= 20 || PlayersHand == 19 && DealersCard != 6 || PlayersHand == 18 && (DealersCard == 7 || DealersCard == 8)) {
            //Stand
            Stand(PlayersHand, DealersHand, SoftDealersHand);
          } else {
            //Hit
            while (17 >= PlayersHand) {
              info = Hit(PlayersHand, SoftPlayersHand);
              PlayersHand = info[0];
              SoftPlayersHand = info[1];
              info = [];
            }
            if (PlayersHand > 21) {
              PlayersHand = PlayersHand - 10;
              while (17 > PlayersHand) {
                info = Hit(PlayersHand, SoftPlayersHand);
                PlayersHand = info[0];
                SoftPlayersHand = info[1];
                info = [];
              }
              if (PlayersHand > 21) {
                PlayerLooses(currentBet);
              } else {
                Stand(PlayersHand, DealersHand, SoftDealersHand);
              }
            } else {
              Stand(PlayersHand, DealersHand, SoftDealersHand);
            }
          }
        }
      }
      if (Shoes <= 0) {
        return "break";
      }
      if (TrueCount < 1) {
        currentBet = 5;
      } else if (1 < TrueCount && TrueCount < 2) {
        currentBet = 50;
      } else if (2 < TrueCount && TrueCount < 3) {
        currentBet = 100;
      } else if (3 < TrueCount && TrueCount < 4) {
        currentBet = 150;
      } else if (4 < TrueCount && TrueCount < 5) {
        currentBet = 200;
      } else if (5 < TrueCount && TrueCount < 6) {
        currentBet = 250;
      } else if (TrueCount > 6) {
        currentBet = 300;
      }
      //console.log("Running Count: ", RunningCount)
      //console.log("True Count: ", TrueCount);
      //console.log("Current Bet: ", currentBet)
      //console.log("Cards Remaining: ", CardsRemaining)
      i += 1;
      if (Money <= 0) {
        console.log("Lost all money!!!");
        return "break";
      }
    };
    while (i < NumberOfRounds) {
      var _ret2 = _loop2();
      if (_ret2 === "break") break;
    }
    Games -= 1;
  };
  while (Games > 0) {
    var _ret = _loop();
    if (_ret === "break") break;
  }
  console.log("Wins: ", wins);
  console.log("Losses: ", losses);
  console.log("Ties: ", ties);
  console.log("Money: ", Money);
}
counter();
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63293" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map