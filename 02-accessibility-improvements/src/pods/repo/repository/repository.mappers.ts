import type * as am from "./api/api.model";
import type * as vm from "../repo.vm";

export const mapOrganizationRepoToVM = (organization: am.Repo): vm.Repo => ({
  id: organization.id,
  name: organization.name,
  description: organization.description,
  htmlUrl: organization.html_url,
  private: organization.private,
  fullName: organization.full_name,
  owner: {
    avatarUrl: organization.owner.avatar_url,
  },
  collaboratorsUrl: organization.collaborators_url,
  createdAt: organization.created_at,
  pushedAt: organization.pushed_at,
  stars: organization.stargazers_count,
  language: organization.language,
  topics: organization.topics,
});
