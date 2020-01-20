$(document).ready(function() {

    // Add missing rows
    $("table").append("<tr><th>Carrots</th><td>France</td><td>56</td><td>75</td><td>Veg</td></tr>")
    $("table").append("<tr><th>Carrots</th><td>France</td><td>56</td><td>75</td><td>Veg</td></tr>")
    $("table").append("<tr><th>Carrots</th><td>France</td><td>56</td><td>75</td><td>Veg</td></tr>")

    // Set rows color
    $("tr:nth-child(even)").addClass("crab_orange")
    $("tr:nth-child(odd)").addClass ("ancient_pink");
});
