import { Request, Response } from 'express';

export interface HttpRequest extends Request {}
export interface HttpResponse extends Response {}