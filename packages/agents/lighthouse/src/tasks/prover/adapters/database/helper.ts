import { Database } from "@connext/nxtp-adapters-database";
import { DBHelper } from "@connext/nxtp-utils";
import { Pool } from "pg";

export class SpokeDBHelper implements DBHelper {
  private cachedNode: Record<string, string> = {};
  private cachedNodes: Record<string, string[]> = {};
  private cachedRoot: Record<string, string> = {};
  constructor(
    private domain: string,
    private count: number,
    private db: { reader: Database; writer: { database: Database; pool: Pool } },
  ) {}

  public async getCount(): Promise<number> {
    return this.count;
  }

  public async getNode(index: number): Promise<string | undefined> {
    let node: string | undefined = this.cachedNode[`${index}`];
    if (!node) {
      node = await this.db.reader.getSpokeNode(this.domain, index, this.count);
      if (node) {
        this.cachedNode[`${index}`] = node;
      }
    }
    return node;
  }

  public async getNodes(start: number, end: number): Promise<string[]> {
    let nodes: string[] = this.cachedNodes[`${start}-${end}`];
    if (!nodes || nodes.length == 0) {
      nodes = await this.db.reader.getSpokeNodes(this.domain, start, end, this.count);
      // Store in cache if all nodes are returned.
      if (nodes.length == end - start + 1) this.cachedNodes[`${start}-${end}`] = nodes;
    }
    return nodes;
  }

  public async getRoot(path: string): Promise<string | undefined> {
    let root: string | undefined = this.cachedRoot[path];
    if (!root) {
      root = await this.db.reader.getRoot(this.domain, path);
      if (root) {
        this.cachedRoot[path] = root;
      }
    }
    return root;
  }

  public async putRoot(path: string, hash: string): Promise<void> {
    return await this.db.writer.database.putRoot(this.domain, path, hash, this.db.writer.pool);
  }

  public async clearCache(): Promise<void> {
    this.cachedNode = {};
    this.cachedNodes = {};
    this.cachedRoot = {};

    return await this.db.writer.database.deleteCache(this.domain, this.db.writer.pool);
  }
}

export class HubDBHelper implements DBHelper {
  private cachedNode: Record<string, string> = {};
  private cachedNodes: Record<string, string[]> = {};
  private cachedRoot: Record<string, string> = {};
  constructor(
    private domain: string,
    private count: number,
    private db: { reader: Database; writer: { database: Database; pool: Pool } },
  ) {}

  public async getCount(): Promise<number> {
    return this.count;
  }

  public async getNode(index: number): Promise<string | undefined> {
    let node: string | undefined = this.cachedNode[`${index}`];
    if (!node) {
      node = await this.db.reader.getHubNode(index, this.count);
      if (node) {
        this.cachedNode[`${index}`] = node;
      }
    }
    return node;
  }

  public async getNodes(start: number, end: number): Promise<string[]> {
    let nodes: string[] = this.cachedNodes[`${start}-${end}`];
    if (!nodes || nodes.length == 0) {
      nodes = await this.db.reader.getHubNodes(start, end, this.count);
      // Store in cache if all nodes are returned.
      if (nodes.length == end - start + 1) this.cachedNodes[`${start}-${end}`] = nodes;
    }
    return nodes;
  }

  public async getRoot(path: string): Promise<string | undefined> {
    let root: string | undefined = this.cachedRoot[path];
    if (!root) {
      root = await this.db.reader.getRoot(this.domain, path);
      if (root) {
        this.cachedRoot[path] = root;
      }
    }
    return root;
  }

  public async putRoot(path: string, hash: string): Promise<void> {
    return await this.db.writer.database.putRoot(this.domain, path, hash, this.db.writer.pool);
  }

  public async clearCache(): Promise<void> {
    this.cachedNode = {};
    this.cachedNodes = {};
    this.cachedRoot = {};

    return await this.db.writer.database.deleteCache(this.domain, this.db.writer.pool);
  }
}
