
module.exports.home = function (req, res) {
    res.render("home", {
        title: "ilovemycity",
        headline: "Failure is the stepping stone of success!"
    })
}

module.exports.city = function (req, res) {
    var cityName = req.params.city
    var title, heading;
    var imageCount = 4;

    if (cityName === "berlin") {
        title = "Berlin"
        heading = "Berlin: where love is in the air."
    } else if (cityName === "paris") {
        title = "Paris"
        heading = "Paris: good talkers are only found in paris."
    } else if (cityName === "madrid") {
        title = "Madrid"
        heading = "Madrid: buzz, beautiful and soccer."
    } else if (cityName === "london") {
        title = "London"
        heading = "London: Sparkling, still, food and gorgeous."
    } else if (cityName === "newyork") {
        title = "New York"
        heading = "New York: come to new york to become someone new."
        imageCount = 6
    } 

    res.render("city", {
        title: title,
        headline: heading,
        city: cityName,
        numberofImages: imageCount
    })

}