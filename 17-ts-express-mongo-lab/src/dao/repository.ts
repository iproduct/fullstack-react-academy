/**
 * THIS HEADER SHOULD BE KEPT INTACT IN ALL CODE DERIVATIVES AND MODIFICATIONS.
 * 
 * This file provided by IPT is for non-commercial testing and evaluation
 * purposes only. IPT reserves all rights not expressly granted.
 *  
 * The security implementation provided is DEMO only and is NOT intended for production purposes.
 * It is exclusively your responsisbility to seek advice from security professionals 
 * in order to secure the REST API implementation properly.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * IPT BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { IPost, Post } from '../model/post.model';
import { Indentifiable, IdType } from '../model/shared-types';
import { MongoClient } from 'mongodb';
import { IUser, User } from '../model/user.model';

export interface IRepository<T extends Indentifiable> {
    add(user: T): Promise<T>;
    edit(user: T): Promise<T>;
    deleteById(id: IdType): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: IdType): Promise<T>;
    getCount(): Promise<number>;
}

export interface IUserRepository extends IRepository<IUser>{
    findByUsername(username: string): Promise<User>
 }
export interface IPostRepository extends IRepository<IPost>{
//    findByTags(tags: string[]): Promise<Post[]>
}