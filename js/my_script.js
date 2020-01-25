$(document).ready(function() {

    // Add missing rows
    $("table").append("<tr><th>Broccoli</th><td>Bulgaria</td><td>12</td><td>70</td><td>Veg</td></tr>");
    $("table").append("<tr><th>Orange</th><td>Morocco</td><td>15</td><td>50</td><td>Fruit</td></tr>");
    $("table").append("<tr><th>Tangerine</th><td>Cyprus</td><td>12</td><td>25</td><td>Fruit</td></tr>");

    // Set rows color
    $("tr:nth-child(even)").addClass("crab_orange");
    $("tr:nth-child(odd)").addClass ("ancient_pink");

    // Second challenge
    $("th").click(function(){
        $("td").removeClass("highlight");
        $(this).siblings("td").addClass("highlight");
    });
});
