"use server";

import { Octokit } from "octokit";

export async function getRepos() {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const repos = await octokit.rest.repos.listForUser({
    username: "shaah1d",
    per_page: 100,
    type: "owner",
    direction: "desc",
    sort: "pushed",
  });
  return repos.data.filter(repo => !repo.fork);
}