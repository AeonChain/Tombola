CREATE TABLE beans(_id TEXT, isBOTD BOOLEAN, cost TEXT, image TEXT, colour TEXT, name TEXT, description TEXT, country TEXT);

INSERT INTO beans SELECT 
  json_extract(value, '$._id'), 
  json_extract(value, '$.isBOTD'),
	json_extract(value, '$.Cost'),
	json_extract(value, '$.Image'),
	json_extract(value, '$.colour'),
	json_extract(value, '$.Name'),
	json_extract(value, '$.Description'),
	json_extract(value, '$.Country')
FROM json_each(readfile('AllTheBeans.json'));