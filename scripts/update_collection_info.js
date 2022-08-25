const basePath = process.cwd();
const fs = require("fs");

// General metadata for Ethereum
const namePrefix = "The Enlightened Lizards";
const description = "Your web 3.0 pass to 4.0 phandom. Help save the lizards from extinction!";
const imagesBaseUri = "ipfs://QmVbyzrSTb8HNZ96FALJMntEgPyjLscxfMRhst8NJ4D4wM";

// read json data
let rawdata = fs.readFileSync(`${basePath}/collection/metadata/metadata.json`);
let data = JSON.parse(rawdata);

// Clear out final asset directories
const destDir = `${basePath}/collection/final/metadata/`
fs.rmSync(destDir, { recursive: true, force: true });
fs.mkdirSync(destDir);

// update the pertinant fields
data.collection.forEach((item, idx) => {
	const id = idx + 1

	// update name & description
	item.name = `${namePrefix} ${item.name}`;
	item.description = description;

	// update image URI - ipfs://[cid]/1.png
	item.image = `${imagesBaseUri}/${item.image}`;

	// add in creators information
	item.properties.creators = ["Drew Cook (@dcodev_)", "David Blutenthal (@phanft_official)"];
	item['external_url'] = 'https://phanft.xyz';

	// add in MINTangible digital IP rights URIs
	item.rights = {
		"rights_registry_listing": `https://rightsregistry.xyz/<blockchain>/<contractAddr>/${id}`,
		"rights_metadata_url": `ipfs://<folder hash>/rights-metadata/${id}.json`,
	};

	// remove compiler field
	delete item.compiler;

	// rewrite the individual token metadata file
  fs.writeFileSync(
    `${destDir + id}.json`,
    JSON.stringify(item, null, 2)
  );
});

// rewrite the entire file
fs.writeFileSync(
  `${destDir}_metadata.json`,
  JSON.stringify(data, null, 2)
);

// log
console.log(`Updated imagesBaseUri for images to ===> ${imagesBaseUri}`);
console.log(`Updated description for images to ===> ${description}`);
console.log(`Updated name prefix for images to ===> ${namePrefix}`);
