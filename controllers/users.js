const errHandle = require('../service/errHandle');
const successHandle = require('../service/succesHandle');

const User = require('../models/userSchema');

const users = {
    async getUsers({ req, res }) {
        const user = await User.find();
        successHandle(res, user);
    },
    async createUser(req, res) {
        try {
            const { body } = req;
            if (body.name !== undefined) {
                const newUser = await User.create(
                    {
                        name: body.name,
                        image: body.image
                    }
                );
                successHandle(res, newUser);
            } else {
                errHandle(res)
            }
        } catch (err) {
            errHandle(res)
        }
    },
    async editPost(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;
            if (body.content !== undefined) {
                const editContent = {
                    name: body.name,
                    content: body.content,
                    tags: body.tags,
                    type: body.type
                };
                //更新後最新的 DATA
                const editPost = await Post.findByIdAndUpdate(id, editContent, { new: true });
                successHandle(res, editPost);
            } else {
                errHandle(res);
            }
        } catch (err) {
            errHandle(res);
        };
    },
    async deletePosts(req, res) {
        await Post.deleteMany({});
        await posts.getPosts({ req, res })
    },
    async deletePost( req, res ) {
        try {
            const { id } = req.params;
            await Post.findByIdAndDelete(id);
            await posts.getPosts({ req, res })
        } catch (err) {
            errHandle(res);
        }
    }
}

module.exports = users;