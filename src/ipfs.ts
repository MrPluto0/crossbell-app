import { IpfsGateway, isIpfsUrl } from "@crossbell/ipfs-gateway";

export const ipfsGateway = new IpfsGateway();

export const ipfsLinkToHttpLink = (link: string) =>
  isIpfsUrl(link) ? ipfsGateway.getSwWeb2Url(link) : link;
