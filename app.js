let $gifArea = $("#gif-area");
let $searchInput = $("#search");

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>");
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}

$("form").on("click", async function (evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "GvOeeWz3TWYQzEKFGow1pYKApvuV2W0Z",
    },
  });
  addGif(response.data);
});

$("#remove").on("click", function () {
  $gifArea.empty();
});
