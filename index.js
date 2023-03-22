// home page
let p1 = 'Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients, such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is "sushi rice", also referred to as shari or sumeshi.'
let p2 = "The inventor of modern sushi is believed to be Hanaya Yohei, who invented nigiri, a type of sushi most known today, in which seafood is placed on hand-pressed vinegared rice, around 1824 in the Edo period (1603-1867). It was the fast food of the chonin class in the Edo period."
let p3 = "Sushi is traditionally made with medium-grain white rice, though it can be prepared with brown rice or short-grain rice. It is very often prepared with seafood, such as squid, eel, yellowtail, salmon, tuna or imitation crab meat. Many types of sushi are vegetarian. It is often served with pickled ginger (gari), wasabi, and soy sauce. Daikon radish or pickled daikon (takuan) are popular garnishes for the dish."
let p4 = "Sushi is sometimes confused with sashimi, a similar dish in Japanese cuisine that consists of thinly sliced raw fish or occasionally meat."
let list1 = [p1,p2,p3,p4];
let homePage = document.getElementsByClassName('content-wrapper')[0];
for (let i = 0; i < list1.length; i++) {
    pElement = document.createElement('p');
    words = list1[i].split(" ");
    for (let j = 0; j < words.length; j++) {
        spanElement = document.createElement('span');
        spanElement.innerHTML = words[j] + " ";
        spanElement.classList.add("content");
        pElement.append(spanElement);
    }
    homePage.append(pElement)
}

// history
let p5 = 'A dish known as nare, stored in fermented rice for possibly months at a time, has been cited as one of the early influences for the Japanese practice of applying rice on raw fish. The fish was fermented with rice vinegar, salt, and rice, after which the rice was discarded. The first mention of sushi is in a Chinese dictionary thought to be from the 4th Century, in this instance referring to salted fish that had been placed in cooked or steamed rice, which caused it to undergo a fermentation process. Fermentation methods following similar logic in other Asian rice cultures include prahok , pla ra, burong isda, sikhae, and amazake.'
let p6 = 'The lacto-fermentation of the rice prevents the fish from spoiling. When wet-field rice cultivation was introduced during the Yayoi period, lakes and rivers would flood during the rainy season, and fish would get caught in the rice paddy fields. Pickling was a way to preserve the excess fish and guarantee food for the following months, and nare became an important source of protein for Japanese consumers. The term sushi literally means "sour-tasting", as the overall dish has a sour and umami or savory taste. The term comes from an antiquated shi terminal-form conjugation, no longer used in other contexts, of the adjectival verb sui, resulting in the term sushi. Nare still exists as a regional specialty, notably as funa from Shiga Prefecture. Vinegar was first added to the preparation of nare in the Muromachi period (1336-1573) for the sake of enhancing both taste and preservation. In addition to increasing the rice\'s sourness, the vinegar significantly increased the dish\'s longevity, causing the fermentation process to be shortened and eventually abandoned. The primitive sushi would be further developed in Osaka, where over several centuries, it became oshi or hako; in this preparation, the seafood and rice were pressed into shape with wooden (typically bamboo) molds.'
let p7 = 'It was not until the Edo period (1603-1868) that fresh fish was served over vinegared rice and nori. The particular style of today\'s nigiri became popular in Edo (contemporary Tokyo) in the 1820s or 1830s. One common story of nigiri\'s origins is of the chef Hanaya Yohei (1799-1858), who invented or perfected the technique in 1824 at his shop in Ryogoku. The dish was originally termed Edomae as it used freshly caught fish from the Edo-mae (Edo or Tokyo Bay); the term Edomae nigiri is still used today as a by-word for quality sushi, regardless of its ingredients\' origins.'
let p8 = 'The earliest written mention of sushi in English described in the Oxford English Dictionary is in an 1893 book, A Japanese Interior, where it mentions sushi as "a roll of cold rice with fish, sea-weed, or some other flavoring". There is an earlier mention of sushi in James Hepburn\'s Japanese-English dictionary from 1873, and an 1879 article on Japanese cookery in the journal Notes and Queries.'
let list2 = [p5,p6,p7,p8];
let historyPage = document.getElementsByClassName('content-wrapper')[1];
for (let i = 0; i < list2.length; i++) {
    pElement = document.createElement('p');
    words = list2[i].split(" ");
    for (let j = 0; j < words.length; j++) {
        spanElement = document.createElement('span');
        spanElement.innerHTML = words[j] + " ";
        spanElement.classList.add("content");
        pElement.append(spanElement);
    }
    historyPage.append(pElement)
}

// types
let p9 = "The common ingredient in all types of sushi is vinegared sushi rice. Fillings, toppings, condiments, and preparation vary widely. Due to rendaku consonant mutation, sushi is pronounced with zu instead of su when a prefix is attached, as in nigiri."
let h1 = "<h2>Chirashi</h2>"
let p10 = "Chirashi serves the rice in a bowl and tops it with a variety of raw fish and vegetable garnishes. It is popular because it is filling, fast, and easy to make. It is eaten annually on Hinamatsuri in March and Kodomonohi in May."
let h2 = "<h2>Inari</h2>"
let p11 = "Inarizush is a pouch of fried tofu typically filled with sushi rice alone. According to Shinto lore, inari is named after the god Inari. Foxes, messengers of Inari, are believed to have a fondness for fried tofu, and an inari roll has pointed corners that resemble fox ears."
let p12 = "Regional variations include pouches made of a thin omelette instead of tofu. It should not be confused with inari maki, a roll filled with flavored fried tofu."
let p13 = "Cone sushi is a variant of inari originating in Hawaii that may include green beans, carrots, or gobo along with rice, wrapped in a triangular abura-age piece. It is often sold in okazu-ya (Japanese delis) and as a component of bento boxes."
let h3 = "<h2>Maki</h2>"
let p14 = "Maki, norimaki or makimono is a cylindrical piece formed with the help of a mat known as a makisu. Maki is generally wrapped in nori (seaweed) but is occasionally wrapped in a thin omelette, soy paper, cucumber, or shiso (perilla) leaves. Maki is often cut into six or eight pieces, constituting a single roll order. Short-grain white rice is usually used, although short-grain brown rice, like olive oil on nori, is now becoming more widespread among the health-conscious. Rarely, sweet rice is mixed in maki rice."
let p15 = "Nowadays, the rice in maki can be many kinds of black rice, boiled rice, and cereals. Besides the common ingredients listed above, some varieties may include cheese, spicy cooked squid, yakiniku, kamaboko, lunch meat, sausage, bacon or spicy tuna. The nori may be brushed with sesame oil or sprinkled with sesame seeds. In a variation, sliced pieces of maki may be lightly fried with egg coating."
let h4 = "<h2>Modern-Nare</h2>"
let p16 = "Nare is a traditional form of fermented sushi. Skinned and gutted fish are stuffed with salt, placed in a wooden barrel, doused with salt again, then weighed down with a heavy tsukemonoishi (pickling stone). As days pass, water seeps out and is removed. After six months, this sushi can be eaten, remaining edible for another six months or more."
let p17 = "The most famous variety of nare are the ones offered as a specialty dish of Shiga Prefecture, particularly the funa made from fish of the crucian carp genus, the authentic version of which calls for the use of nigorobuna, a particular locally differentiated variety of wild goldfish endemic to Lake Biwa."
let h5 = "<h2>Nigiri</h2>"
let p18 = "Nigiri consists of an oblong mound of sushi rice that a chef typically presses between the palms of the hands to form an oval-shaped ball and a topping (the neta) draped over the ball. It is usually served with a bit of wasabi; toppings are typically fish such as salmon, tuna, or other seafood. Certain toppings are typically bound to the rice with a thin strip of nori, most commonly octopus (tako), freshwater eel (unagi), sea eel (anago), squid (ika), and sweet egg (tamago)."
let p19 = "Gunkanmaki is a special type of nigiri: an oval, hand-formed clump of sushi rice that has a strip of nori wrapped around its perimeter to form a vessel that is filled with some soft, loose or fine-chopped ingredient that requires the confinement of nori such as roe, natto, oysters, uni (sea urchin roe), sweetcorn with mayonnaise, scallops, and quail eggs. Gunkan-maki was invented at the Ginza Kyubey restaurant in 1941; its invention significantly expanded the repertoire of soft toppings used in sushi."
let p20 = "Temari is a style of sushi made by pressing rice and fish into a ball-shaped form by hand using a plastic wrap."
let h6 = "<h2>Oshi</h2>"
let p21 = "Oshi, also known as hako, is a pressed sushi from the Kansai region, a favorite and specialty of Osaka. A block-shaped piece is formed using a wooden mold, called an oshibako. The chef lines the bottom of the oshibako with the toppings, covers them with sushi rice, and then presses the mold's lid to create a compact, rectilinear block. The block is removed from the mold and then cut into bite-sized pieces. Particularly famous is battera or saba. In oshi, all the ingredients are either cooked or cured, and raw fish is never used."
let p22 = "Oshiz wrapped in persimmon leaves, a specialty of Nara, is known as kakinoha."
let list3 = [p9,h1,p10,h2,p11,p12,p13,h3,p14,p15,h4,p16,p17,h5,p18,p19,p20,h6,p21,p22];
let typesPage = document.getElementsByClassName('content-wrapper')[2];
for (let i = 0; i < list3.length; i++) {
    pElement = document.createElement('p');
    words = list3[i].split(" ");
    for (let j = 0; j < words.length; j++) {
        spanElement = document.createElement('span');
        spanElement.innerHTML = words[j] + " ";
        spanElement.classList.add("content");
        pElement.append(spanElement);
    }
    typesPage.append(pElement)
}

// west
let p23 = "The increasing popularity of sushi worldwide has resulted in variations typically found in the Western world but rarely in Japan. A notable exception to this is the use of salmon. The Japanese have eaten salmon since prehistory; however, caught salmon in nature often contains parasites and must be cooked or cured for its lean meat to be edible. On the other side of the world, in the 1960s and 1970s, Norwegian entrepreneurs started experimenting with aquaculture farming. The big breakthrough was when they figured out how to raise salmon in net pens in the sea. Being farm-raised, the Atlantic salmon reportedly showed advantages over the Pacific salmon, such as no parasites, easy animal capture, and could be grown with higher fat content. With government subsidies and improved techniques, they were so successful in raising fatty and parasite-free salmon they ended up with a surplus. Norway has a small population and limited market; therefore, they looked to other countries to export their salmon. The first Norwegian salmon was imported into Japan in 1980, accepted conventionally, for grilling, not for sushi. Salmon had already been consumed in North America as an ingredient in sushi as early as the 1970s. Salmon sushi did not become widely accepted in Japan until a successful marketing partnership in the late 1980s between a Norwegian businessman tasked with helping the Norwegian salmon industry and the Japanese food supplier Nichirei."
let p24 = "Other sushi creations to suit the Western palate were initially fueled by the invention of the California roll (a norimaki with crab or imitation crab, cucumber, and avocado). A wide variety of popular rolls (norimaki and uramaki) have evolved since. 'Norway roll' is another variant of uramaki filled with tamago (omelette), imitation crab and cucumber, rolled with shiso leaf and nori, topped with slices of Norwegian salmon, garnished with lemon and mayonnaise."
let h7 = "<h2>Uramaki</h2>"
let p25 = "Uramaki is a medium-sized cylindrical style of sushi with two or more fillings and was developed as a result of the creation of the California roll, as a method originally meant to hide the nori. Uramaki differs from other makimono because the rice is on the outside and the nori inside. The filling is surrounded by nori, then a layer of rice, and optionally an outer coating of some other ingredients such as roe or toasted sesame seeds. It can be made with different fillings, such as tuna, crab meat, avocado, mayonnaise, cucumber, or carrots."
let p26 = "Examples of variations include the rainbow roll (an inside-out topped with thinly sliced maguro, hamachi, ebi, sake and avocado) and the caterpillar roll (an inside-out topped with thinly sliced avocado). Also commonly found is the \"rock and roll\" (an inside-out roll with barbecued freshwater eel and avocado with toasted sesame seeds on the outside)."
let p27 = "In Japan, uramaki is an uncommon type of makimono; because sushi is traditionally eaten by hand in Japan, the outer layer of rice can be quite difficult to handle with fingers."
let p28 = "In Brazil, uramaki and other sushi pieces include cream cheese in their recipe. Uncommon for the traditional recipe, this is the most common ingredient used in preparing sushi in the country. Temaki also often contains a large amount of cream cheese and is extremely popular in restaurants."
let h8 = "<h2>American-style-Maki</h2>"
let p29 = "Multiple-filling rolls inspired by futomaki are a more popular type of sushi within the United States and come in variations that take their names from their places of origin. Other rolls may include a variety of ingredients, including chopped scallops, spicy tuna, beef or chicken teriyaki roll, okra, and assorted vegetables such as cucumber and avocado, and the tempura roll, where shrimp tempura is inside the roll or the entire roll is battered and fried tempura-style. In the Southern United States, many sushi restaurants prepare rolls using crawfish. Sometimes, rolls are made with brown rice or black rice, known as forbidden rice, which appear in Japanese cuisine as well."
let p30 = "Per Food and Drug Administration regulations, raw fish served in the United States must be frozen before serving to kill parasites."
let p31 = "Since rolls are often made to order, it is not unusual for the customer to specify the exact ingredients desired (e.g., salmon roll, cucumber roll, avocado roll, tuna roll, shrimp or tuna tempura roll, etc.)."
let h9 = "<h2>Canada</h2>"
let p32 = "Many of the styles seen in the United States are also seen in Canada and their own. Doshi (a portmanteau of sushi and donut) is a donut-shaped rice ball on a deep-fried crab or imitation crab cake topped with sushi ingredients. Maki Poutine is similar to maki in style except it is topped with cheese curds and gravy and contains duck confit, more cheese curds, and sweet potato tempura. Sushi cake is made of crab meat, avocado, shiitake mushroom, salmon, spicy tuna, and tobiko and served on sushi rice then torched with spicy mayo, BBQ sauce, balsamic reduction, and dotted with caper and garlic chips. Sushi pizza is deep fried rice or crab/imitation crab cake topped with mayo and various sushi ingredients."
let h10 = "<h2>Mexico/Western-U.S.</h2>"
let p33 = "Sinaloan sushi originated in Sinaloa, Mexico and has been available in the Western United States since 2013."
let list4 = [p23,p24,h7,p25,p26,p27,p28,h8,p29,p30,p31,h9,p32,h10,p33];
let westernPage = document.getElementsByClassName('content-wrapper')[3];
for (let i = 0; i < list4.length; i++) {
    pElement = document.createElement('p');
    words = list4[i].split(" ");
    for (let j = 0; j < words.length; j++) {
        spanElement = document.createElement('span');
        spanElement.innerHTML = words[j] + " ";
        spanElement.classList.add("content");
        pElement.append(spanElement);
    }
    westernPage.append(pElement)
}

// ingred
let p34 = "All sushi has a base of specially prepared rice, complemented with other ingredients. Traditional Japanese sushi consists of rice flavored with vinegar sauce and various raw or cooked ingredients."
let h11 = "<h2>Sushi-meshi</h2>"
let p35 = "Sushi-meshi (also known as su-meshi, shari, or gohan) is a preparation of white, short-grained, Japanese rice mixed with a dressing consisting of rice vinegar, sugar, salt, and occasionally kombu and sake. It must be cooled to room temperature before being used for a sushi filling, or it will get too sticky while seasoned. Traditionally, it is mixed with a hangiri (a round, flat-bottom wooden tub or barrel) and a shamoji (a wooden paddle)."
let p36 = "Sushi rice is prepared with short-grain Japanese rice, which has a consistency that differs from long-grain strains such as those from India, Sri Lanka, Bangladesh, Thailand, and Vietnam. The essential quality is its stickiness or glutinousness, although the type of rice used for sushi differs from glutinous rice. Freshly harvested rice (shinmai) typically contains too much water and requires extra time to drain the rice cooker after washing. In some fusion cuisine restaurants, short-grain brown rice and wild rice are also used."
let p37 = "There are regional variations in sushi rice, and individual chefs have their methods. Most of the variations are in the rice vinegar dressing: the Kanto region (or East Japan) version of the dressing commonly uses more salt; in Kansai region (or West Japan), the dressing has more sugar."
let h12 = "<h2>Nori</h2>"
let p38 = "The dark green seaweed wrappers used in makimono are called nori. Nori is a type of algae traditionally cultivated in the harbors of Japan. Originally, algae was scraped from dock pilings, rolled out into thin, edible sheets, and dried in the sun, similar to making rice paper. Today, the commercial product is farmed, processed, toasted, packaged, and sold in sheets."
let p39 = "The size of a nori sheet influences the size of makimono. A full-size sheet produces futomaki, and a half produces hosomaki and temaki. To produce gunkan and some other makimono, an appropriately-sized piece of nori is cut from a whole sheet."
let p40 = "Nori by itself is an edible snack and is available with salt or flavored with teriyaki sauce. The flavored variety, however, tends to be of lesser quality and is not suitable for sushi."
let p41 = "When making fukusa, a paper-thin omelette may replace a sheet of nori as the wrapping. The omelette is traditionally made on a rectangular omelette pan, known as a makiyakinabe, and used to form the pouch for the rice and fillings."
let h13 = "<h2>Gu</h2>"
let p42 = "The ingredients used inside sushi are called gu and are, typically, varieties of fish. For culinary, sanitary, and aesthetic reasons, the minimum quality and freshness of fish to be eaten raw must be superior to that of fish which is to be cooked. Sushi chefs are trained to recognize important attributes, including smell, color, firmness, and freedom from parasites that may go undetected in a commercial inspection. Commonly used fish are tuna (maguro, shiro-maguro), Japanese amberjack, yellowtail (hamachi), snapper (kurodai), mackerel (saba), and salmon (sake). The most valued sushi ingredient is toro, the fatty cut of the fish. This comes in a variety of otoro (often from the bluefin species of tuna) and chutoro, meaning \"middle toro\", implying that it is halfway into the fattiness between toro and the regular cut. Aburi style refers to nigiri sushi, where the fish is partially grilled (topside) and partially raw. Most nigiri sushi will have completely raw toppings, called neta."
let p43 = "Other seafoods such as squid (ika), eel (anago and unagi), pike conger (hamo), octopus (tako), shrimp (ebi and amaebi), clam (mirugai, aoyagi and akagai), fish roe (ikura, masago, kazunoko and tobiko), sea urchin (uni), crab (kani), and various kinds of shellfish (abalone, prawn, scallop) are the most popular seafoods in sushi. Oysters are less common, as the taste is thought to not go well with the rice. Kani kama, or imitation crab stick, is commonly substituted for real crab, most notably in California rolls."
let p44 = "Pickled daikon radish (takuan) in shinko maki, pickled vegetables (tsukemono), fermented soybeans (natto) in natto maki, avocado, cucumber in kappa maki, asparagus, yam, pickled ume (umeboshi), gourd (kanpyo), burdock (gobo), and sweet corn (sometimes mixed with mayonnaise) are plant products used in sushi."
let p45 = "Tofu, eggs (in the form of slightly sweet, layered omelette called tamagoyaki), and raw quail eggs (as a gunkan-maki topping) are also common."
let h14 = "<h2>Condiments</h2>"
let p46 = "Sushi is commonly eaten with condiments. Sushi may be dipped in shoyu (soy sauce), and is usually flavored with wasabi, a piquant paste made from the grated stem of the Wasabia japonica plant. Japanese-style mayonnaise is a common condiment in Japan on salmon, pork, and other sushi cuts."
let p47 = "The traditional grating tool for wasabi is a sharkskin grater or samegawa oroshi. An imitation wasabi (seiyo-wasabi), made from horseradish, mustard powder, and green dye, is common. It is found at lower-end kaiten restaurants, in bento box sushi, and at most restaurants outside Japan. If manufactured in Japan, it may be labelled \"Japanese Horseradish\". The spicy compound in both true and imitation wasabi is allyl isothiocyanate, which has well-known anti-microbial properties. However, true wasabi may contain some other antimicrobials as well."
let p48 = "Gari (sweet, pickled ginger) is eaten in between sushi courses to both cleanse the palate and aid in digestion. In Japan, green tea (ocha) is invariably served together with sushi. Better sushi restaurants often use a distinctive premium tea known as mecha. In sushi vocabulary, green tea is known as agari."
let p49 = "Sushi may be garnished with gobo, grated daikon, thinly-sliced vegetables, carrots, radishes, and cucumbers that have been shaped to look like flowers, real flowers, or seaweed salad."
let p50 = "When closely arranged on a tray, different pieces are often separated by green strips called baran or kiri-zasa. These dividers prevent the flavors of neighboring pieces of sushi from mixing and help to achieve an attractive presentation. Originally, these were cut leaves from the Aspidistra elatior and Sasa veitchii plants, respectively. Using actual leaves had the added benefit of releasing antimicrobial phytoncides when cut, thereby extending the limited shelf life of the sushi."
let p51 = "Sushi bento boxes are a staple of Japanese supermarkets and convenience stores. As these stores began rising in prominence in the 1960s, the labor-intensive cut leaves were increasingly replaced with green plastic to lower costs. This coincided with the increased prevalence of refrigeration, which extended sushi's shelf life without the need for cut leaves. Today plastic strips are commonly used in sushi bento boxes and, to a lesser degree, in sushi presentations found in sushi bars and restaurants. In store-sold or to-go packages of sushi, the plastic leaf strips are often used to prevent the rolls from coming into early or unwanted contact with the ginger and wasabi included with the dish."
let list5 = [p34,h11,p35,p36,p37,h12,p38,p39,p40,p41,h13,p42,p43,p44,p45,h14,p46,p47,p48,p49,p50,p51];
let ingredientsPage = document.getElementsByClassName('content-wrapper')[4];
for (let i = 0; i < list5.length; i++) {
    pElement = document.createElement('p');
    words = list5[i].split(" ");
    for (let j = 0; j < words.length; j++) {
        spanElement = document.createElement('span');
        spanElement.innerHTML = words[j] + " ";
        spanElement.classList.add("content");
        pElement.append(spanElement);
    }
    ingredientsPage.append(pElement)
}

// risks
let p52 = "Potential chemical and biological hazards in sushi include environmental contaminants, pathogens, and toxins."
let p53 = "Large marine apex predators such as tuna (especially bluefin) can harbor high levels of methylmercury, one of many toxins of marine pollution. Frequent or significantly large consumption of methylmercury can lead to developmental defects when consumed by certain higher-risk groups, including women who are pregnant or may become pregnant, nursing mothers, and young children. A 2021 study in Catalonia, Spain reported that the estimated exposure to methylmercury in sushi consumption by adolescents exceeded the tolerable daily intake."
let p54 = "A 2011 article reported approximately 18 million people infected with fish-borne flukes worldwide. Such an infection can be dangerous for expecting mothers due to the health risks that medical interventions or treatment measures may pose on the developing fetus. Parasitic infections can have a wide range of health impacts, including bowel obstruction, anemia, liver disease, and more. These illnesses' impact can pose health concerns for the expecting mother and baby."
let p55 = "Sashimi or other types of sushi containing raw fish present a risk of infection by three main types of parasites:"
let l1 = "<li>Clonorchis-sinensis</li>"
let l2 = "<li>Anisakis</li>"
let l3 = "<li>Diphyllobothrium</li>"
let p56 = "For these reasons, EU regulations forbid using raw fish that had not previously been frozen. It must be frozen at temperatures below -20 \u00B0C (-4 \u00B0F) in all product parts for no less than 24 hours. Fish for sushi may be flash frozen on fishing boats and by suppliers to temperatures as low as -60 \u00B0C (-76 \u00B0F). Super-freezing destroys parasites, and also prevents oxidation of the blood in tuna flesh that causes discoloration at temperatures above -20 \u00B0C (-4 \u00B0F)."
let p57 = "Calls for stricter analysis and regulation of seafood include improved product description. A 2021 DNA study in Italy found 30%-40% of fish species in sushi incorrectly described."
let p58 = "Some forms of sushi, notably those containing the fugu pufferfish and some kinds of shellfish, can cause severe poisoning if not prepared properly. Fugu consumption, in particular, can be fatal. Fugu fish has a lethal dose of tetrodotoxin in its internal organs and, by law in many countries, must be prepared by a licensed fugu chef who has passed the prefectural examination in Japan. Licensing involves a written test, a fish-identification test, and a practical test that involves preparing the fugu and separating out the poisonous organs; only about 35 percent of applicants pass."
let list6 = [p52,p53,p54,p55,l1,l2,l3,p56,p57,p58];
let risksPage = document.getElementsByClassName('content-wrapper')[5];
for (let i = 0; i < list6.length; i++) {
    pElement = document.createElement('p');
    words = list6[i].split(" ");
    for (let j = 0; j < words.length; j++) {
        spanElement = document.createElement('span');
        spanElement.innerHTML = words[j] + " ";
        spanElement.classList.add("content");
        pElement.append(spanElement);
    }
    risksPage.append(pElement)
}

function search() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let x = document.getElementsByClassName('content');
    for (let i = 0; i < x.length; i++) {
        if (!!x[i].innerHTML.toLowerCase().includes(input) && input != "") {
            x[i].classList.add("highlighted");
        }
        else {
            x[i].classList.remove("highlighted");
        }
    }
}

function diffPage(event) {
    let choosePage = event.target.getAttribute('alt');
    let chosenPage = document.getElementById(choosePage);
    let currentPage = document.getElementsByClassName('not-hidden')[0];
    chosenPage.classList.toggle('hidden');
    currentPage.classList.toggle('not-hidden');
    chosenPage.classList.toggle('not-hidden');
    currentPage.classList.toggle('hidden');
}
document.getElementById("navigation").addEventListener("click", diffPage);

function diffHeader(event) {
    let chooseHeader = event.target.getAttribute('alt');
    let chosenHeader = document.getElementById(chooseHeader + "-header");
    let currentHeader = document.getElementsByClassName('not-hidden-header')[0];
    chosenHeader.classList.toggle('hidden-header');
    currentHeader.classList.toggle('not-hidden-header');
    chosenHeader.classList.toggle('not-hidden-header');
    currentHeader.classList.toggle('hidden-header');
}
document.getElementById("navigation").addEventListener("click", diffHeader);
