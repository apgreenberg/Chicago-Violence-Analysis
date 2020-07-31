var titleMapping = new Map();
titleMapping.set('#policeLine', {desc:"police funding for investigations, foot patrol, and internal review", category:"Police Funding", num:0});
titleMapping.set('#violentLine', {desc:"crimes rates in homicide, rape, robbery, burglary, and battery", category:"Violent Crime", num:1});
titleMapping.set('#otherLine', {desc:"crime rates of narcotics and criminal damage", category:"Non-Violent Crime", num:2});
titleMapping.set('#socialLine', {desc:"city spending on social programs", category:"Social Assistance Program Funding", num:3});
titleMapping.set('#homicideLine', {desc:"homicides", category: "Homicide", num:1});
titleMapping.set('#rapeLine', {desc:"rapes", category:"Rape and Sexual Assault", num:1});
titleMapping.set('#robberyLine', {desc:"robberies", category:"Robbery", num:1});
titleMapping.set('#burglaryLine', {desc:"burglaries", category: "Burglary", num:1});
titleMapping.set('#assaultLine', {desc:"assault/battery", category: "Assault and Battery", num:1});
titleMapping.set('#narcLine', {desc:"narcotics", category:"Narcotics", num:2});
titleMapping.set('#crimdamLine', {desc:"crinimal damage", category:"Criminal Damage", num:2});
titleMapping.set('#econLine', {desc:"crinimal damage", category:"Economic Stimulus Programs", num:3});
titleMapping.set('#houseLine', {desc:"crinimal damage", category:"Housing Assistance Programs", num:3});
titleMapping.set('#youthLine', {desc:"crinimal damage", category:"Youth Programs", num:3});
titleMapping.set('#homelessLine', {desc:"crinimal damage", category:"Homeless and Human Services", num:3});
titleMapping.set('#violenceLine', {desc:"crinimal damage", category:"Violence Prevention Programs", num:3});
titleMapping.set('#mentalLine', {desc:"mental health programs", category:"Mental Health Programs", num:3});
origData = [
  {
    name: "police",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-0.5"},
      {year: "2014", percent: "2.6"},
      {year: "2015", percent: "6"},
      {year: "2016", percent: "0.1"},
      {year: "2017", percent: "2.2"},
      {year: "2018", percent: "2.9"},
      {year: "2019", percent: "4.7"},
      {year: "2020", percent: "4"},
    ]
  },
  {
    name: "violent",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-11.8"},
      {year: "2014", percent: "10.6"},
      {year: "2015", percent: "-2"},
      {year: "2016", percent: "7.7"},
      {year: "2017", percent: "-2"},
      {year: "2018", percent: "-1.9"},
      {year: "2019", percent: "-4.3"},
      {year: "2020", percent: "-7.5"},
    ]
  },
  {
    name: "other",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-8.9"},
      {year: "2014", percent: "-12.4"},
      {year: "2015", percent: "-7.6"},
      {year: "2016", percent: "-15.7"},
      {year: "2017", percent: "-8.2"},
      {year: "2018", percent: "1.5"},
      {year: "2019", percent: "-0.6"},
      {year: "2020", percent: "-12.9"},
    ]
  },
  {
    name: "social",
    values: [
      {year: "2012", percent: "0"},
      {year: "2013", percent: "-40.4"},
      {year: "2014", percent: "28.8"},
      {year: "2015", percent: "1.4"},
      {year: "2016", percent: "-4.2"},
      {year: "2017", percent: "5.7"},
      {year: "2018", percent: "-2.3"},
      {year: "2019", percent: "-7.7"},
      {year: "2020", percent: "45.7"},
    ]
  }];