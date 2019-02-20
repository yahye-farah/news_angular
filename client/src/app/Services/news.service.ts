import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor() {}
  getNews() {
    return [
      {
        source: {
          id: null,
          name: "Hollywoodreporter.com"
        },
        author: "Paul Bond",
        title:
          "In Race to Beat Netflix, Studios Give Up Billions In Profits - Hollywood Reporter",
        description:
          'As major conglomerates ready their own streaming services, they\'ll leave lucrative licensing fees on the table to compete for subscriptions in a contest that, at least in the short term, is likely to "cost everyone."',
        url:
          "https://www.hollywoodreporter.com/news/race-beat-netflix-studios-give-up-billions-profits-1187055",
        urlToImage:
          "https://cdn1.thr.com/sites/default/files/2019/02/thr-streaming_wars-illustration_by_matt_collins-h_2019.jpg",
        publishedAt: "2019-02-19T13:45:00Z",
        content:
          "On Feb. 10, Epix launched a streaming service, becoming the latest network — like CBS, Showtime and HBO before it — looking to extract more profit from its library. That list will grow when Disney and WarnerMedia unveil services in 2019 and NBCUniversal debut… [+4999 chars]"
      },
      {
        source: {
          id: null,
          name: "Marketwatch.com"
        },
        author: "Chris Matthews, William Watts",
        title:
          "Stock-index futures edge down ahead of latest U.S.-China trade talks - MarketWatch",
        description:
          "Stock-index futures point to a slightly lower start Tuesday ahead of a new round of U.S.-China trade talks.",
        url:
          "https://www.marketwatch.com/story/stock-index-futures-edge-down-ahead-of-latest-us-china-trade-talks-2019-02-19",
        urlToImage:
          "http://s.marketwatch.com/public/resources/MWimages/MW-HE110_us_chi_ZG_20190219064917.jpg",
        publishedAt: "2019-02-19T13:12:00Z",
        content:
          "Stock-index futures traded slightly lower Tuesday as U.S. investors return from a three-day weekend and ahead of another round of U.S.-China trade talks. What are major benchmarks doing? Futures on the Dow Jones Industrial Average YMH9, -0.30% fell 49 points,… [+3790 chars]"
      },
      {
        source: {
          id: "the-wall-street-journal",
          name: "The Wall Street Journal"
        },
        author: "Bojan Pancevski",
        title:
          "In Rebuke to U.S., Germany Considers Letting Huawei In - The Wall Street Journal",
        description:
          "The German government is considering letting Huawei participate in building the nation’s high-speed internet infrastructure despite U.S. warnings about the risks posed by the Chinese tech giant.",
        url:
          "https://www.wsj.com/articles/in-rebuke-to-u-s-germany-considers-letting-huawei-in-11550577810",
        urlToImage: "https://images.wsj.net/im-54646/social",
        publishedAt: "2019-02-19T12:49:00Z",
        content:
          "BERLINThe German government is leaning toward letting Huawei Technologies Co. participate in building the nations high-speed internet infrastructure despite U.S. warnings about the risks posed by the Chinese tech giant, according to senior German officials. T… [+6131 chars]"
      },
      {
        source: {
          id: null,
          name: "Seekingalpha.com"
        },
        author: "SA Editor Douglas W. House",
        title:
          "Intercept up 23% premarket on positive OCA data - Seeking Alpha",
        description:
          "Intercept Pharmaceuticals (NASDAQ:ICPT) is up 23% premarket on light volume following its announcement of positive results from a Phase 3 clinical trial, REGENERATE, evaluating obeticholic acid &#40;O",
        url:
          "https://seekingalpha.com/news/3434349-intercept-23-percent-premarket-positive-oca-data",
        urlToImage:
          "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
        publishedAt: "2019-02-19T12:43:00Z",
        content:
          "Intercept Pharmaceuticals (NASDAQ: ICPT ) is up 23% premarket on light volume following its announcement of positive results from a Phase 3 clinical trial, REGENERATE, evaluating obeticholic acid (OCA) in patients with liver fibrosis (scarring) due to nonalco… [+636 chars]"
      },
      {
        source: {
          id: "cnn",
          name: "CNN"
        },
        author: "Matt Egan, CNN Business",
        title:
          "How US sanctions on Venezuela are rippling through oil markets - CNN",
        description:
          "US sanctions on Venezuela's national oil company have accelerated the unprecedented collapse of its oil output and set off a domino effect in the global energy market.",
        url:
          "https://www.cnn.com/2019/02/19/investing/venezuela-oil-sanctions-pdvsa/index.html",
        urlToImage:
          "https://cdn.cnn.com/cnnnext/dam/assets/190218160920-01-venezuela-pdvsa-0217-restricted-super-tease.jpg",
        publishedAt: "2019-02-19T12:36:00Z",
        content: null
      },
      {
        source: {
          id: null,
          name: "Foxbusiness.com"
        },
        author: "Joe Williams",
        title:
          "Walmart's improvements drive spike in online, in-store sales - Fox Business",
        description:
          "E-commerce sales in the fourth quarter jumped 43 percent, while same-store sales grew 4.2 percent.",
        url:
          "https://www.foxbusiness.com/retail/walmarts-improvements-drive-spike-in-online-instore-sales",
        urlToImage:
          "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2018/11/0/0/walmart-logo-shopping-cart-2.jpg?ve=1&tl=1",
        publishedAt: "2019-02-19T12:32:17Z",
        content:
          "Strategic Resource Group Managing Director Burt Flickinger breaks down Walmart's fourth-quarter results and outlook. Walmart's fourth quarter earnings topped Wall Street estimates amid concerns that a slew of investments from the world’s largest retailer to b… [+2307 chars]"
      },
      {
        source: {
          id: "cnn",
          name: "CNN"
        },
        author: "Analysis by Daniel Shane, CNN Business",
        title:
          "Japan Inc poured billions into Britain. Now it's having regrets - CNN",
        description:
          "Japan's top companies are losing patience with the United Kingdom as Brexit fast approaches.",
        url:
          "https://www.cnn.com/2019/02/19/business/japan-companies-uk-economy/index.html",
        urlToImage:
          "https://cdn.cnn.com/cnnnext/dam/assets/190219000736-honda-brexit-1902-03-super-tease.jpg",
        publishedAt: "2019-02-19T12:24:00Z",
        content: null
      },
      {
        source: {
          id: "cnn",
          name: "CNN"
        },
        author: "Nathaniel Meyersohn, CNN Business",
        title: "Walmart had a blowout holiday - CNN",
        description:
          "Walmart's all-important holiday sales blew past expectations, a sign the retailer can more than hold its ground against Amazon.",
        url:
          "https://www.cnn.com/2019/02/19/investing/walmart-earnings-stock-holiday/index.html",
        urlToImage:
          "https://cdn.cnn.com/cnnnext/dam/assets/190219070713-01-walmart-shopper-file-restricted-super-tease.jpg",
        publishedAt: "2019-02-19T12:19:00Z",
        content: null
      },
      {
        source: {
          id: "cnbc",
          name: "CNBC"
        },
        author: "David Reid",
        title:
          "Saudi Arabia's oil deal with Russia is now 'more fragile than ever,' analyst says - CNBC",
        description:
          "The two countries have attempted to raise prices by agreeing supply cuts while at the same time the U.S. has increased output.",
        url:
          "https://www.cnbc.com/2019/02/19/saudi-arabias-opec-oil-deal-with-russia-could-fail.html",
        urlToImage:
          "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/11/30/105601937-1543581248902russiasaudiopec.1910x1000.jpg",
        publishedAt: "2019-02-19T12:13:00Z",
        content:
          'A rolling oil pact between Russia and Saudi Arabia which seeks to support prices by reducing output looks to be on shaky ground with only the Arab nation appearing to fulfil its promises. div &gt; div.group &gt; p:first-child"&gt; Late last year, OPEC produci… [+2577 chars]'
      },
      {
        source: {
          id: "techcrunch",
          name: "TechCrunch"
        },
        author: "Rita Liao",
        title:
          "Amazon is reportedly merging its China import unit with NetEase - TechCrunch",
        description:
          "You’d be forgiven for not knowing Amazon has operated in China for more than a decade, but perhaps not for much longer. The company is reportedly in talks to merge its China-based import business with local peer Kaola, the cross-border shopping platform run b…",
        url: "https://techcrunch.com/2019/02/19/amazon-china-netease-merger/",
        urlToImage:
          "https://techcrunch.com/wp-content/uploads/2019/02/GettyImages-696675012-e1550575514327.jpg?w=751",
        publishedAt: "2019-02-19T11:32:02Z",
        content:
          "You’d be forgiven for not knowing Amazon has operated in China for more than a decade, but perhaps not for much longer. The company is reportedly in talks to merge its China-based import business with local peer Kaola, the cross-border shopping platform run b… [+2880 chars]"
      },
      {
        source: {
          id: "the-wall-street-journal",
          name: "The Wall Street Journal"
        },
        author: "Chip Cutter",
        title:
          "Companies Roll Out Gunshot Detectors at the Office - The Wall Street Journal",
        description:
          "Corporate executives worried about workplace shootings are quietly installing gunfire-detection systems in U.S. offices and factories.",
        url:
          "https://www.wsj.com/articles/companies-roll-out-gunshot-detectors-at-the-office-11550575801",
        urlToImage: "https://images.wsj.net/im-54575/social",
        publishedAt: "2019-02-19T11:30:00Z",
        content:
          "Corporate executives worried about workplace shootings are quietly installing gunfire-detection systems in U.S. offices and factories. Most dont tell employees what the sensors are, for fear of alarming them. The rapid uptick in adoption of gunshot sensors fo… [+6496 chars]"
      },
      {
        source: {
          id: null,
          name: "Wbng.com"
        },
        author: null,
        title:
          "Fast-food chain offers employers free college tuition with a catch - WBNG-TV",
        description:
          "The pizza chain is offering to pay all tuition for undergraduate and graduate online degree programs.",
        url:
          "https://wbng.com/news/top-stories/2019/02/19/fast-food-chain-offers-employers-free-college-tuition-with-a-catch/",
        urlToImage:
          "https://s3-ca-central-1.amazonaws.com/quincy-network/wp-content/uploads/sites/19/2019/02/Student-loans.jpg",
        publishedAt: "2019-02-19T11:27:59Z",
        content: null
      },
      {
        source: {
          id: null,
          name: "Wsls.com"
        },
        author: null,
        title:
          "Vehicle safety inspection fee will likely go up in Virginia - WSLS 10",
        description:
          "Virginia drivers are likely to pay more for vehicle safety inspections.",
        url:
          "https://www.wsls.com/news/virginia/vehicle-safety-inspection-fee-will-likely-go-up-in-virginia",
        urlToImage:
          "https://media.wsls.com/photo/2019/01/22/new-virginia-vehicle-inspection-sticker_1548182370436_17879996_ver1.0_1280_720.jpg",
        publishedAt: "2019-02-19T11:04:47Z",
        content:
          "RICHMOND, Va. (AP) - Virginia drivers are likely to pay more for vehicle safety inspections. The General Assembly has given preliminary approval to legislation that will raise the price of a yearly car inspection from $16 to $20. The House and Senate have bot… [+439 chars]"
      },
      {
        source: {
          id: "wired",
          name: "Wired"
        },
        author: "WIRED Staff",
        title: "The Confounding Climate Science of Lab-Grown Meat - WIRED",
        description:
          "The assumption goes that lab-grown meat will drastically reduce emissions of beef production. But you know what they say about assumptions...",
        url:
          "https://www.wired.com/story/the-confounding-climate-science-of-lab-grown-meat/",
        urlToImage:
          "https://media.wired.com/photos/5c676ecca860f42c60b486ae/191:100/pass/Science-LabGrownMeat_SS2768304.jpg",
        publishedAt: "2019-02-19T10:00:00Z",
        content:
          "A future in which your hamburger is grown from animal cells in a lab is rapidly approaching. The idea is that by culturing meat in a vat, you not only cut down on animal slaughter but greatly reduce emissions, on account of cattle taking a lot of energy to ra… [+6778 chars]"
      },
      {
        source: {
          id: null,
          name: "Sciencealert.com"
        },
        author: "Peter Dockrill",
        title:
          "Scientists Developed an AI So Advanced They Say It's Too Dangerous to Release - ScienceAlert",
        description:
          "A group of computer scientists once backed by Elon Musk has caused some alarm by developing an advanced artificial intelligence (AI) they say is too dangerous to release to the public.",
        url:
          "https://www.sciencealert.com/scientists-developed-an-ai-so-advanced-they-say-it-s-too-dangerous-to-release",
        urlToImage:
          "https://www.sciencealert.com/images/2019-02/processed/017-openai-language-model-predict-dangerous_1024.jpg",
        publishedAt: "2019-02-19T06:49:26Z",
        content:
          'A group of computer scientists once backed by Elon Musk has caused some alarm by developing an advanced artificial intelligence (AI) they say is too dangerous to release to the public. OpenAI, a research non-profit based in San Francisco, says its "chameleon-… [+4719 chars]'
      },
      {
        source: {
          id: null,
          name: "Nypost.com"
        },
        author: "Fox News",
        title:
          "JetBlue passenger kicked off flight after throwing tantrum about sitting next to child - New York Post ",
        description:
          "Video footage of a drunken JetBlue passenger throwing a tantrum has gone viral online. Valerie Gonzalez was reportedly taking a JetBlue flight from Fort Lauderdale-Hollywood International Airport t…",
        url:
          "https://nypost.com/2019/02/19/jetblue-passenger-kicked-off-flight-after-throwing-tantrum-about-sitting-next-to-child/",
        urlToImage:
          "https://thenypost.files.wordpress.com/2019/02/shutterstock_165731765.jpg?quality=90&strip=all&w=1200",
        publishedAt: "2019-02-19T06:26:00Z",
        content:
          "Video footage of a drunken JetBlue passenger throwing a tantrum has gone viral online. Valerie Gonzalez was reportedly taking a JetBlue flight from Fort Lauderdale-Hollywood International Airport to Las Vegas on Thursday when she became upset that she was sea… [+1163 chars]"
      },
      {
        source: {
          id: null,
          name: "Seekingalpha.com"
        },
        author: "Trapping Value",
        title: "Uniti Never Dies: Starring Bonds, Just Bonds - Seeking Alpha",
        description:
          "Judgment day arrived at for Windstream. The loss to Aurelius is a game changer and Uniti Group investors are in panic mode. The vertical spike in cost of equity",
        url:
          "https://seekingalpha.com/article/4241991-uniti-never-dies-starring-bonds-just-bonds",
        urlToImage:
          "https://static1.seekingalpha.com/uploads/2019/2/18/47392447-15505161904815207.png",
        publishedAt: "2019-02-19T06:13:00Z",
        content:
          "Windstream ( WIN ) lost its court battle to Aurelius and its investors were definitely not celebrating the long weekend. The ruling says the court's task wasn't to opine on the financial wisdom of Windstream Services' decisions in the transaction, but to enfo… [+8162 chars]"
      },
      {
        source: {
          id: null,
          name: "Zdnet.com"
        },
        author: "Cho Mu-Hyun",
        title:
          "Samsung unveils robotic arm that will assist in cooking in the kitchen - ZDNet",
        description:
          "Samsung Electronics has showcased futuristic robots for use in the kitchen, including a robot arm dubbed Samsung Bot Chef that will help with cooking.",
        url:
          "https://www.zdnet.com/article/samsung-unveils-robotic-arm-that-will-assist-in-cooking-in-the-kitchen/",
        urlToImage:
          "https://zdnet1.cbsistatic.com/hub/i/r/2019/02/19/931a4cd7-c3d6-4685-a7ad-ff5a7bd6d688/thumbnail/770x578/91303d715672f2e4ffb36b39c1166370/02-1.jpg",
        publishedAt: "2019-02-19T05:19:00Z",
        content:
          "These robotic arms can also download recipes. (Image: Samsung) Samsung has showcased new robots for use in the kitchen, including a robotic arm that will help with cooking, at The Kitchen &amp; Bath Industry Show in Las Vegas. Customers can attach various kit… [+1909 chars]"
      },
      {
        source: {
          id: null,
          name: "Summitdaily.com"
        },
        author: null,
        title:
          "Arapahoe Basin Ski Area CEO explains reasons for breakup with Vail Resorts - Summit Daily News",
        description:
          "Arapahoe Basin Ski Area and Keystone Resort might have just became each other’s biggest competitors.For years, the resort and ski area only 5 miles apart have worked together under",
        url:
          "https://www.summitdaily.com/news/arapahoe-basin-ski-area-ceo-explains-reasons-for-breakup-with-vail-resorts/",
        urlToImage:
          "https://cdn.summitdaily.com/wp-content/uploads/sites/2/2019/02/BasinKeystone-SDN-021919-1.jpg",
        publishedAt: "2019-02-19T03:14:03Z",
        content:
          "Arapahoe Basin Ski Area and Keystone Resort might have just became each others biggest competitors. For years, the resort and ski area only 5 miles apart have worked together under an agreement that allows Keystones pass holders the opportunity to carve turns… [+4905 chars]"
      },
      {
        source: {
          id: "reuters",
          name: "Reuters"
        },
        author: "Reuters Editorial",
        title:
          "Mongolia to suspend KFC outlets for inquiry after food poisoning reports - Reuters",
        description:
          "A Mongolian regulator said it will suspend operations at KFC restaurants temporarily to conduct inquiries, as 42 people were hospitalized and hundreds showed food poisoning symptoms after eating at one of the outlets of the fast-food chain.",
        url:
          "https://www.reuters.com/article/us-yum-brands-mongolia/mongolia-to-suspend-kfc-outlets-for-inquiry-after-food-poisoning-reports-idUSKCN1Q806G",
        urlToImage:
          "https://s3.reutersmedia.net/resources/r/?m=02&d=20190219&t=2&i=1358035934&w=1200&r=LYNXNPEF1I03L",
        publishedAt: "2019-02-19T03:02:00Z",
        content:
          "ULAANBAATAR (Reuters) - A Mongolian regulator said it will suspend operations at KFC restaurants temporarily to conduct inquiries, as 42 people were hospitalized and hundreds showed food poisoning symptoms after eating at one of the outlets of the fast-food c… [+1844 chars]"
      }
    ];
  }
}
