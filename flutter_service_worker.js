'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b8240265672aa76ae846ed2f37a206e8",
".git/config": "1905d956607e56663a2e50e297c917d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dbfe56dd55243c5d529ceff0241d20e8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cbc796af617d60c8c11a7c7dc6ee6b88",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a80dbdc549a6f98f5c063bb5c956440c",
".git/logs/refs/heads/gh-pages": "c7a848cf7f2c8d94702590473254f66d",
".git/logs/refs/heads/main": "a80dbdc549a6f98f5c063bb5c956440c",
".git/logs/refs/remotes/origin/gh-pages": "4986e830087b8f513957fa41056d6376",
".git/logs/refs/remotes/origin/HEAD": "02f52dcbeed85a78ec5f86e8c8b277f2",
".git/logs/refs/remotes/origin/main": "e8c0c7071d8b3456bc35252110c30013",
".git/objects/04/d031aa3948c740a135325da400e13292fc0837": "19c2c0c47a8c7d85dcb61552c1d5313b",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/08/334c337aabf2f21bfe13eb324f24727be63b25": "40514423c5056f09215ae48299587d73",
".git/objects/09/6f655c0c2af71606a96020fe8cc65cc4f6c6d5": "27c2ceaedacd270334dbd034144d0bea",
".git/objects/09/f988675d43dca121c8a567ee4127c1e1c2eeb9": "6bc6176b960f12a0bcd9a430a4ac4bab",
".git/objects/0b/75f9460a89802cde7835bdf632d183c7166be0": "ea2852dded579e71fbc6995b53517900",
".git/objects/0d/c250a2ae1a5766d96a04751b1fef2582209d05": "efb7da82cf71cc10186d531f75818b25",
".git/objects/0e/39c984380a8d259759d53de7f7823ea115f738": "28db3e6ce669d0ba89bbeb0a37bcef13",
".git/objects/10/599b3c2433c703a5fe08443a192aa8af309b80": "48d2e55dd52554c370350be775b499c7",
".git/objects/12/64a6c1010c624c5372a236146fa8cc26406ffa": "1e856ea9f26ca96a1b8ef6db6d6f51f0",
".git/objects/15/22ed1f85bf91fe6e56eaabccc8f31d12d263d5": "ddae28ae9bc75ca50a838de47dfc68f5",
".git/objects/19/959af0d3314840eadb1ba02f84c9acdac1dde3": "c1c3a7d577d85a38cfa64685ba07508d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/3ee586ab24ff0331539a2686066976379438fc": "b1bdd9641b9dfae4fbba517c696a8203",
".git/objects/24/f26f18b999be9ba47f1fa8d329096dbe429754": "2f0d526a236d4d94d2f485948e0282b6",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/9ebcdfd0f832e525950b848b280926c356b4e1": "490561b77df9d405f55e1327572e9b2a",
".git/objects/2f/afb3dfb313ebb097ce80f02020554e8630a2af": "f807c5b2c920cff0a6374411f9eaafdb",
".git/objects/32/1a1ef284bdfb5ba7fd27c3950ef2aa7e417322": "ea67559a539ff0ff5a9fa13fdfd1e862",
".git/objects/37/47ff1c35072e58168aea900d5fa92b23171999": "1f033048e0486aa39e7ed3867700c626",
".git/objects/43/7a81b01eb21616a3d71414edc3f35723afea65": "00e81b9cf5b323b0bd6ff4ed8e13d91c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/3d522f146d006427da04da9c9e6c9ab02dfaed": "daf8af0811949f2ab5c8a1abe1324746",
".git/objects/4d/d25a8a9c2f68dcd2c32e3a452bf504b4cfe6dd": "66d0a215cce97f1b72cc90879fd8faef",
".git/objects/57/7c1423befe57ae25ad3235cfd86a5745c4e3b1": "4061e746896973125abf07f16f63c25b",
".git/objects/58/ee3a168f396171c28124be4e43dcff47193bb4": "5dd226238438ea6b5174e1af83d725eb",
".git/objects/5e/0add6e18dbe67b115644f8ccd3767bd6378d0f": "0ba33daf8c66afcbf85e7de98be688fc",
".git/objects/60/1f3679e98b9ef0dc71f1b79b1c506ffd86d616": "04661837dc6f6a20df56fab044ffb93b",
".git/objects/62/9e63a3887c9168e5d278f4b6913099e2afb3bf": "2aa9a4b9157bd8b7f7d594ba88c3ee02",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/28e30a840d3d5eada61ca5145c84cd63d21d00": "62492d45de4ec5683529b61e386ac61b",
".git/objects/66/9c2c10c009f80859918fab7be5ca86486e1ae7": "5d2fc5106dd3bfd1c732826aebb3f726",
".git/objects/6b/15e5aba4d3caa589d229d70c9daba53fa8e194": "5d008f318c85aafd2e5c267ff25b0da8",
".git/objects/6b/914b4189bfedd45d309ecab5476e4815e8af54": "d102bc0824a6dae4d7be1ad3120bb696",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7c/a31fe7c92bd2a58c39cbf47fa714e7401b5137": "f8553f8071b0b3ea0880daeedf275ab4",
".git/objects/81/8c52ebaf605c8c03abe931dc6ee1222fac8424": "d827c34b88471d9cb68d15dead90deac",
".git/objects/81/9cb834dbf093bdc4ed5792f56e20e32fd12ba5": "c2de21d7c8af678cfce7d73867156cff",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/3343fb5d2f3d45aa7d2bfcf0a54113802c602f": "2c9b80bfdc505d4e289d4bd35bd96820",
".git/objects/87/c29397795a775b62bc62515dc7464f645ed005": "fa024ccac310425885f67454819a6496",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/2857cda59fca96cfe9ef6fa651499e78613b20": "e05635e7ba2979722495588c1e17c01b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/bd52fa151330cf50f16d9d824fdab66af3b9b0": "65fdc45d0aa5e1e94b5091f76db7807b",
".git/objects/94/a443821a72d054b4c267d2c4173eda18f26695": "767c0971013d6a44904cee202c29c871",
".git/objects/96/1ac0f609fce780b94c478283fdca249e1c3f7b": "3089fe596ff9ebdfb5ba9019ca0abed9",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9b/a09dd61856d57386774a9fa243559e89b11683": "34ff0abf9526b90d7b133f651e5e0822",
".git/objects/9e/3846bbdf49d8bf398ca56ca659864ceafea27a": "cc9135273cc8b04bc1af58ff06ce96ea",
".git/objects/a6/82b2d1cbfb1078439e83414d5a2eb198cbd5a7": "ebda40382109d993c3c4758bcd7e0638",
".git/objects/aa/a25f7f7a80572045e81b8d5c1592da7fa7a5a8": "3278212d795476926960b009c28ae7ce",
".git/objects/ab/31333d353976528a1bb60e0efe31c9a518c1d9": "12c4ae39df6c6dea69c9c5de6ad68abb",
".git/objects/ac/ad519a05af192b19bd905646b9a93583f2f52c": "e13fd29e5ba48419016a5334432fc6e8",
".git/objects/ad/991e15c9fb85d0764dbf9a738d51eafb3d1c10": "9f36d7ae03d4559633ff5cbcde3e2dba",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/155b417ba238233536e05af1fb2ec4617f41da": "f65e93873b7d26cf2d1f999464dfad51",
".git/objects/b1/0a50aad611394c5f38c66ae27a1ac0f14fe2b4": "2a92f5f17c45338009216232b86feea0",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/8970bb6b646c5f6b13ba8338f111222733a8c7": "2e4c9c3c19bfc48749c4cadeee67d8a0",
".git/objects/b4/b129aaa10143496d42c53fd789cfc289c40bd5": "99eb1959fece08ea31d73a9bec5f4465",
".git/objects/b4/ca3607b86f22569380f82ca81b3b731d64ee74": "b1d517688ac2a729239191b3509f63f9",
".git/objects/b6/02468a4faeb972bf8da10720de221000eb2022": "6361f85a4226b2f9384abbf5f1f13e2b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/217b041c883c16c45265907439f3a2519399d6": "297cd63abb6af2985180d78812225b2b",
".git/objects/c1/1ef016d3774ef20ffab7b22fc0b6eec7fe3f94": "65ba3ace1bca5ee27f9cc892ac087201",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/fc7fbe9689df0223b968119738e0b85bd273d5": "ddc09bc9941925dd6d68a6abff85a2df",
".git/objects/c5/1fc5654ca192d7241967cc18bb1af5726fab01": "d0efa9a0fea348ecc371c1b7e65eb9a1",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ce/d2ac906ff094a2e734eb28b364e2d81fe01432": "9f8589cbc68f40b3ea59b89cc37618d2",
".git/objects/d0/3d479ff95ae9238e7a474313d21b41aaeffbc0": "f729f613b62d074589e12e54ab83ef2c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/9682e3e38b85bc1510cfcd71665799535c2bb1": "f4b679981e8716ad39c0cb602d0d7024",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/001aa020e7bfe5b500f053e9a54970d213733f": "8485b020717e524a70369e67b31afe4d",
".git/objects/eb/04679489c60d0375fe1fbcefbc50b0ec6d6def": "7f352123b9aeee7dcaaddabdf2a90dcc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ef/ff8ce438391e013866221d1c02000b0f599f7c": "9ce0749017b895c4f0ad90378f61e663",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/8c46297512a3ade39574b33e1ed955ca34f106": "bcf63645094ea4a4d10adead7c91e6e3",
".git/objects/f3/93fcf5061fe227873638a941b4ef1bee0c3c48": "35af90328cd21fdea517191c4c332c25",
".git/objects/f3/e6074eed1a8d1b879813daf890ae947e444351": "6180c1929bb4831d2681430362845012",
".git/objects/f4/18fc787ea50983b79b569b3246e0bfec300d6d": "1f491e15d550b76f4e282fbb793cb15a",
".git/objects/f9/b1a4eaa1f036e8eea19699a8f795fe095c8430": "cfc66f4eeaf1a79353f8c3a339a501c2",
".git/refs/heads/gh-pages": "83bae15cde2bc0fe9cbf11692e5719c1",
".git/refs/heads/main": "83bae15cde2bc0fe9cbf11692e5719c1",
".git/refs/remotes/origin/gh-pages": "83bae15cde2bc0fe9cbf11692e5719c1",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "81951f534850ac23fae56c7266b7b831",
".git/subtree-cache/1736/notree/6b15e5aba4d3caa589d229d70c9daba53fa8e194": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/subtree-cache/1736/notree/f393fcf5061fe227873638a941b4ef1bee0c3c48": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/worktrees/dullddal-gh-pages/commondir": "206cf9ccad7abed0e90bd4e033122c65",
".git/worktrees/dullddal-gh-pages/gitdir": "0959a661cdd84454ac6cccea2a6dfd14",
".git/worktrees/dullddal-gh-pages/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/worktrees/dullddal-gh-pages/index": "83f3b69bea6e3273e1b6c25a278373ce",
".git/worktrees/dullddal-gh-pages/logs/HEAD": "af852ede3ba7f06fd0689945ca4f2d8a",
".git/worktrees/dullddal-gh-pages/ORIG_HEAD": "83bae15cde2bc0fe9cbf11692e5719c1",
"assets/AssetManifest.bin": "7e9d5a509873bf43cee2d4fb292732d1",
"assets/AssetManifest.bin.json": "ee142ad2c760d627963b05b77e0505fa",
"assets/AssetManifest.json": "017d111aac8e1535bacb5e4c47c2a34c",
"assets/assets/ai/poker_ai_data.json": "a0a25ccab84ca6d55cbc3a13bd55eb17",
"assets/assets/audio/tinnitus.mp3": "3e2646368dea43b88949c9cc03f08637",
"assets/assets/images/backgroundtemp2.png": "ba4c584375cce5cc331cc262811ac000",
"assets/assets/images/background_layer_back.png": "1b50dc1fdbdfa4c5fb4a63f462fdb1b1",
"assets/assets/images/backlight_layer_middle.png": "90cba5940222014cc15e8582dc7f9362",
"assets/assets/images/card/card_empty.png": "31290756d0a0b03754b7c96383421020",
"assets/assets/images/card/card_heart_01.png": "99ef3dccbb612fd4bbd6ec55b0b4ddbb",
"assets/assets/images/card/card_heart_02.png": "140ec17ebcbacb76add7754fb9f97ada",
"assets/assets/images/card/card_heart_03.png": "f36da7bdb7591144319f364502962171",
"assets/assets/images/card/card_heart_04.png": "11fb5b34346ae2653042f9e964c74fb8",
"assets/assets/images/card/card_heart_05.png": "9304313a4ad0ae9993b3f45620f0bab0",
"assets/assets/images/card/card_heart_06.png": "f8fdefe4c7547955f99e59770e77146b",
"assets/assets/images/card/card_heart_07.png": "1e955dc1173b42f5d6ffe98ea44f565f",
"assets/assets/images/card/card_heart_08.png": "1bf78bf74809f03b7499ea9ad2c748df",
"assets/assets/images/card/card_heart_09.png": "79f467fe6dbb814bc721b5eb9c3a2b21",
"assets/assets/images/card/card_heart_10.png": "633bf33cbfdf60c2035f2c09b624e6d0",
"assets/assets/images/card/card_reverse.png": "1cc49a47ae3bf04450556768f5b8600e",
"assets/assets/images/card/card_spade_01.png": "4b52c5777c3f388593baaff6b471dbcf",
"assets/assets/images/card/card_spade_02.png": "9dd193ff6424cbd171c58c1d4c66b333",
"assets/assets/images/card/card_spade_03.png": "daa392bd08a7197028ea5027e96deeea",
"assets/assets/images/card/card_spade_04.png": "5d08860b45f7853a8e68a30173c0f229",
"assets/assets/images/card/card_spade_05.png": "6aed24dbc9bb63631dc9805ed8088d1f",
"assets/assets/images/card/card_spade_06.png": "c9b95589e700221cd012d286ec371ff4",
"assets/assets/images/card/card_spade_07.png": "dc3b5036e9d676281f9d61e27254c941",
"assets/assets/images/card/card_spade_08.png": "0e06168f217f1310ea763dc5df1f391d",
"assets/assets/images/card/card_spade_09.png": "5216a0246c585f52f6e6e148bbcb09f5",
"assets/assets/images/card/card_spade_10.png": "763f75806ce37a8908ccd8e274d50beb",
"assets/assets/images/chips/hp_chip.png": "3215a04a3609bb26f86a428ea2997ad4",
"assets/assets/images/chips/hp_chip_side.png": "89d81f2fc8bf7c367a2dc9dd67a002a4",
"assets/assets/images/chips/normal_chip.png": "a4ddbb8d18e10f24bbb2125cd72a49a1",
"assets/assets/images/chips/normal_chip_side.png": "3528884cec6b9a50b83e558061b734ad",
"assets/assets/images/itemassettemp.png": "e9add92ec174d275d5ecb0b8c8e7f0d1",
"assets/assets/images/table_layer_middle.png": "25d985f3f6d10d385fa347727299c685",
"assets/assets/images/tempch.png": "c48d59d73e7e658d9f9453a776938d5c",
"assets/assets/shaders/glitch.frag": "e3f76d6a6b9da7008534ec91dc08a2e2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d3b6831f4fd3f6a6a5a29cde4d1e18f9",
"assets/NOTICES": "dc259822e25fb25985717179012d2f72",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "01a24f64389784bbd92726a177368ff3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "722be3341b9d129a80a0008e026944c9",
"/": "722be3341b9d129a80a0008e026944c9",
"main.dart.js": "91f55f3da897c795982b7bd5bc14dfca",
"manifest.json": "7939c631e33f3f2fa34fcbf25aaeb07b",
"version.json": "d7c2fd183699e32fbfc368694dffc08f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
