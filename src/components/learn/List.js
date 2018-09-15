import React, { Component } from "react"

import Card from "./Card"


class List extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for now, we're
        faking it and just creating those arrays in the component
        itself
    */
   

    // This will eventually get pulled from the API
    bigList = [
        // { state_id:  name:  dateOfStatehood:  capital:  nicknames:  motto:  flower:  bird:   },

        { state_id: 1, name: "Delaware", dateOfStatehood: "December 7, 1787", capital: "Dover", nicknames: "First State, Diamond State", motto: "Liberty and Independence", flower: "Peach Blossom", bird: "Blue hen chicken"},

        { state_id: 2, name: "Pennsylvania", dateOfStatehood: "December 12, 1787", capital: "Harrisburg", nicknames: "Keystone State", motto: "Virtue, Liberty and Independence", flower: "Mountain Laurel", bird: "Ruffed Goose"  },

        { state_id: 3, name: "New Jersey", dateOfStatehood: "December 18, 1787", capital: "Trenton", nicknames: "Garden State", motto: "Liberty and Prosperity", flower: "Purple Violet", bird: "Eastern Goldfinch"  },

        { state_id: 4, name: "Georgia", dateOfStatehood: "January 2, 1788", capital: "Atlanta", nicknames: "The Peach State, Empire State of the South", motto: "Wisdom, Justice, and Moderation", flower: "Cherokee rose", bird: "Brown thrasher"  },

        { state_id: 5, name: "Connecticut", dateOfStatehood: "January 9, 1788", capital:"Hartford",  nicknames: "Nutmeg State, Constitution State", motto: "Qui Transtulit Sustinet (He who transplanted still sustains",  flower: "Mountain Laurel", bird: "American Robin"  },

        { state_id: 6, name: "Massachusetts", dateOfStatehood: "February 6, 1788", capital: "Boston", nicknames: "Bay State", motto: "Ense Petit Placidam Sub Libertate Quietem (By the sword we seek peace, but peace only under liberty)", flower: "Mayflower", bird: "Chickadee"  },

        { state_id: 7, name: "Maryland", dateOfStatehood: "April 28, 1788", capital: "Annapolis",  nicknames: "Old Line State, Free State", motto: "Fatti Maschii, Parole Femine (Manly Deeds, Womanly Words)", flower: "Black-eyed Susan", bird: "Baltimore Oriole"  },

        { state_id: 8, name: "South_Carolina", dateOfStatehood: "May 23, 1788", capital: "Columbia", nicknames: "Palmetto State", motto: "Dum Spiro Spero (While I breathe, I hope)", flower: "Yellow jessamine",  bird: "Carolina wren"  },

        { state_id: 9, name: "New Hampshire", dateOfStatehood: "June 21, 1788", capital: "Concord", nicknames: "Granite State", motto: "Live free or die", flower: "Purple lilac", bird: "Purple finch"  },
        
        { state_id: 10, name: "Virginia", dateOfStatehood: "June 25, 1788", capital: "Richmond", nicknames: "Sic Semper Tyrannis (Thus always to tyrants)", motto: "Liberty and Independence",  flower: "Dogwood",   bird: "Cardinal"  },
            
        { state_id: 11, name: "New_York", dateOfStatehood: "July 26,1788",   capital: "Albany",  nicknames: "Empire State", motto: "Excelsior (Ever Upward)", flower: "Rose", bird: "Bluebird"  },
        
        { state_id: 12, name: "North Carolina", dateOfStatehood:  "November 21, 1789", capital: "Raleigh", nicknames: "Tarheel State, Old North State", motto: "Esse quam videri (To be rather than to seem)", flower: "Dogwood", bird: "Cardinal"  },

        { state_id: 13, name: "Rhode Island", dateOfStatehood: "May 29, 1790", capital: "Providence", nicknames: "Little Rhody, Ocean State", motto: "Hope", flower: "Violet", bird: "Rhode Island Red"  },

        { state_id: 14, name: "Vermont", dateOfStatehood: "March 4, 1791", capital: "Montpelier", nicknames: "Green Mountain State", motto: "Freedom an unity", flower: "Red clover", bird: "Hermit thrush"  },

        { state_id: 15, name: "Kentucky", dateOfStatehood: "June 1, 1792", capital: "Frankfort", nicknames: "Bluegrass State", motto: "United we stand, Divided we fall", flower: "Goldenrod", bird: "Cardinal"  },

        { state_id: 16, name: "Tennessee", dateOfStatehood: "June 1, 1796",  capital: "Nashville", nicknames:"Volunteer State",  motto: "Agriculture and Commerce", flower:"Iris",  bird: "Mockingbird" },

        { state_id: 17, name: "Ohio", dateOfStatehood: "March 1, 1803", capital: "Columbus", nicknames: "Buckeye State", motto: "With God, all things are possible", flower: "Scarlet carnation", bird: "Cardinal"  },

        { state_id: 18, name: "Louisiana",  dateOfStatehood: "April 30, 1812",  capital: "Baton Rouge", nicknames: "Pelican State", motto: "Union, justice, and confidence", flower: "Magnolia", bird: "Eastern brown pelican"  },
        
        { state_id: 19, name: "Indiana", dateOfStatehood: "December 11, 1816", capital: "Indianapolis", nicknames: "Hoosier State", motto: "Crossroads of America", flower: "Peony", bird: "Cardinal"  },
        
        { state_id: 20, name: "Mississippi", dateOfStatehood: "December 10, 1817", capital: "Jackson", nicknames: "Magnolia State", motto: "Virtute et Armis (By Valor and Arms)", flower: "Magnolia", bird: "Mockingbird"  },
        
        { state_id: 21, name: "Illinois", dateOfStatehood: "December 3, 1818", capital: "Springfield ", nicknames: "Prarie State, Land of Lincoln", motto: "State sovereignty, national union", flower: "Natural violet", bird: "Cardinal"  },
        
        { state_id: 22, name: "Alabama", dateOfStatehood: "December 14, 1819",  capital: "Montgomery",  nicknames: "Heart of Dixie, Camellia State", motto: "We dare defend our right", flower: "Camellia", bird: "Yellowhammer"  },
        
        { state_id: 23, name: "Maine", dateOfStatehood: "March 15, 1820", capital: "Augusta", nicknames:  "Pine Tree State", motto: "Dirigo (I Direct)", flower: "White pine cone and tassel", bird: "Chickadee"  },
        
        { state_id: 24, name:  "Missouri", dateOfStatehood: "August 10, 1821", capital: "Jefferson City", nicknames: "Show Me State", motto: "Salus Populi Suprema Lex Esto (The welfare of the people shall be its supreme law)", flower: "Hawthorn",  bird: "Bluebird" },
       
        { state_id: 25, name: "Arkansas", dateOfStatehood: "June 15, 1836", capital: "Little Rock", nicknames: "Land of Opportunity, Natural State", motto: "Regnal Populus (The people rule)", flower: "Apple Blossom", bird: "Mockingbird"  },
        
        { state_id: 26, name: "Michigan", dateOfStatehood: "January 26, 1837",  capital: "Lansing", nicknames: "Great Lakes State, Wolverine State", motto: "Si Quaeris Peninsulam Amoenam Circumspice (If you seek a pleasant peninsula, look about you)",  flower: "Apple Blossom", bird: "Robin"  },
        
        { state_id: 27, name: "Florida", dateOfStatehood: "March 3, 1845", capital: "Tallahassee", nicknames: "Sunshine State", motto: "In God we trust", flower: "Orange blossom", bird:  "Mockingbird" },
        
        { state_id: 28, name: "Texas", dateOfStatehood: "December 29, 1845", capital: "Austin", nicknames: "Lone Star State", motto: "Friendship", flower: "Bluebonnet",  bird: "Mockingbird"  },
        
        { state_id: 29, name: "Iowa", dateOfStatehood: "December 28, 1846",  capital: "Des Moines", nicknames: "Hawkeye State", motto: "Our liberties we prize and our rights we will maintain", flower: "Wild rose", bird: "Eastern goldfinch"  },
        
        { state_id: 30, name: "Wisconsin", dateOfStatehood: "May 29, 1848", capital: "Madison", nicknames: "Badger State, America's Dairyland", motto: "Forward",  flower: "Wood violet", bird: "Robin"  },
    
        { state_id: 31, name: "California", dateOfStatehood: "September 9, 1850", capital: "Sacramento", nicknames: "Golden State", motto: "Eureka (I have found it)", flower: "Golden poppy", bird: "Californa valley quail"  },
        
        { state_id: 32, name: "Minnesota", dateOfStatehood: "May 11, 1858", capital: "St. Paul", nicknames: "Land of 10,000 Lakes, North Star State, Gopher State", motto: "L'Etoile du Nord (North Star)", flower: "Pink-and-white lady's slipper", bird: "Common loom"  },
        
        { state_id: 33, name: "Oregon", dateOfStatehood: "February 14, 1859", capital: "Salem", nicknames: "Beaver State", motto: "She flies with her own wings", flower: "Oregon grape", bird: "Western meadowlark"  },
        
        { state_id: 34, name: "Kansas", dateOfStatehood: "January 29, 1861", capital: "Topeka",  nicknames: "Sunflower State", motto: "Ad Astra per Aspera (To the stars through difficulties)", flower: "Sunflower", bird: "Western meadowlark"  },
        
        { state_id: 35, name: "West Virginia", dateOfStatehood: "June 20, 1863", capital: "Charleston", nicknames: "Mountain State",  motto: "Montani Semper Liberi (Mountaineers are always free)", flower:  "Big rhododendron", bird: "Cardinal"  },
        
        { state_id: 36, name: "Nevada", dateOfStatehood: "October 31, 1864", capital: "Carson City", nicknames: "Silver State", motto: "All for our country; Sagebrush state (archaic)", flower: "Sagebrush", bird: "Mountain Bluebird"  },
    
        { state_id: 37, name: "Nebraska", dateOfStatehood: "March 1, 1867", capital: "Lincoln", nicknames:  "Cornhusker State", motto: "Equality before the law", flower: "Goldenrod", bird: "Western meadowlark"  },
        
        { state_id: 38, name: "Colorado", dateOfStatehood: "August 1, 1876", capital: "Denver", nicknames:  "Centennial State", motto: "Nil Sine Numine (Nothing without the deity)",  flower: "Rocky Mountain columbine", bird: "Lark bunting"  },
        
        { state_id: 39, name: "North Dakota", dateOfStatehood: "November 2, 1889", capital: "Bismarck", nicknames: "Peace Garden State, Rough Rider State, Cereal State", motto: "Liberty and union, now and forever, one and inseparable", flower: "Wild prairie rose", bird: "Western meadowlark"  },
        
        { state_id: 40, name: "South Dakota", dateOfStatehood: "November 2, 1889", capital: "Pierre", nicknames: "Coyote State, Mount Rushmore State", motto: "Under God, the people rule", flower: "Wild prarie rose", bird: "Ring-necked pheasant"  },
         
        { state_id: 41, name: "Montana", dateOfStatehood: "November 8, 1889", capital: "Helena",  nicknames:  "Treasure State", motto: "Ora y Plata (Gold and Silver)", flower: "Bitterroot", bird: "Western meadowlark"  },
        
        { state_id: 42, name: "Washington", dateOfStatehood: "November 11, 1889", capital: "Olympia", nicknames: "Evergreen State", motto: "Alki (By and by)", flower: "Western rhododendron", bird: "Willow goldfinch" },
        
        { state_id: 43, name: "Idaho", dateOfStatehood: "July 3, 1890", capital: "Boise", nicknames: "Gem State", motto: "Esto Perpetua (It is perpetual)", flower: "Syringia", bird: "Mountain bluebird"  },
        
        { state_id: 44, name:  "Wyoming", dateOfStatehood: "July 10, 1890", capital: "Cheyenne", nicknames: "Equality State", motto: "Equal rights", flower: "Indian paintbrush", bird: "Meadowlark"  },
       
        { state_id: 45, name: "Utah", dateOfStatehood: "January 4, 1896", capital: "Salt Lake City", nicknames: "Beehive State", motto: "Industry", flower: "Sego Lily", bird: "Seagull"  },
        
        { state_id: 46, name: "Oklahoma", dateOfStatehood: "November 16, 1907", capital: "Oklahoma City", nicknames: "Sooner State", motto: "Labor Omnia Vincit (Labor conquers all things)", flower: "Mistletoe", bird: "Scissor-tailed flycatcher"  },
        
        { state_id: 47, name: "New Mexico", dateOfStatehood: "January 6, 1912", capital: "Santa Fe", nicknames: "Land of Enchantment", motto: "Crescit Eundo (It grows as it goes)", flower: "Yucca",  bird: "Roadrunner"  },
        
        { state_id: 48, name: "Arizona", dateOfStatehood: "February 14, 1912",  capital: "Phoenix", nicknames: "Grand Canyon State",  motto: "Ditat Deus (God enriches)", flower: "Saguaro Cactus blossom", bird: "Cactus wren"  },
        
        { state_id: 49, name: "Alaska", dateOfStatehood: "January 3, 1959", capital: "Juneau", nicknames: "The Last Frontier (unofficial)", motto: "North to the future", flower: "", bird: "",  },
        
        
        { state_id: 50, name: "Hawaii", dateOfStatehood: "August 21, 1959", capital: "Honolulu", nicknames: "Aloha State", motto: "Ua mau, ke ea o ka aina i ka pono (the life of the land is perpetuated in righteousness)", flower: "Yellow hibiscus", bird: "Hawaiian goose"  },

        { state_id: 51, name: "District of Columbia", dateOfStatehood: "1 of 6 U.S. territories ",  capital: "Capital of the United States of America", nicknames: "DC", motto: "Justia Omnibus (Justice for All)",  flower: "American Beauty Rose",  bird: "Wood thrush"  },
        
        { state_id: 52, name: "Puerto Rico", dateOfStatehood: "1 of 6 U.S. territories", capital: "San Juan", nicknames: "", motto: "Joannes Est Nomen Eius (John is his name)", flower: "Maga", bird: "Reinita"  },
      
        { state_id: 53, name: "Guam", dateOfStatehood: "1 of 6 U.S. territories", capital: "Hagatna (Agana)", nicknames: "", motto: "Where America's day begins", flower: "Bougainvillea spectabilis", bird: "Marianas rose crown fruit dove"  },
        
        
        { state_id: 54, name: "American_Samoa", dateOfStatehood: "1 of 6 U.S. territories", capital: "Pago Pago", nicknames: "The last frontier", motto: "Samoa Muamua le Atua (God is first in Samoa)", flower: "Paogo", bird: "Willow ptarmigan"  },
       
        { state_id: 55, name: "US Virgin Islands", dateOfStatehood: "1 of 6 U.S. territories", capital: "Charlotte Amalie, St. Thomas", nicknames: "United in pride", motto: "", flower: "Yellow elder or yellow cedar", bird: "Yellow breast or banana quit"  },
        
    ]
    state = {
       
        everything: this.bigList
    }

    render() {
        return (
            <article className="kennel">
                <Card everything={this.state.everything} />
               
            </article>
        )
    }
}

export default List
                