import path from "path";
import fs from "fs";
import matter from "matter";

const postsDirectory = path.join(process.cwd(), "posts");

//get md file data
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id fileName.replace(/\.md$/, "");  //id = fileName

    //get markdown's data as character 
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //analize markdown metadata with matter
    const matterRersult = matter(fileContents);

    //return id and data
    return {
      id,
      // ...~~~ = Spread syntax
      ...matterResult,
    };
  });
}