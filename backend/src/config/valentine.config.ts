export const valentineConfig = () => ({
  name: process.env.VALENTINE_NAME,
  message: process.env.VALENTINE_MESSAGE,
  gifts: [
    process.env.GIFT_LINK_1,
    process.env.GIFT_LINK_2,
    process.env.GIFT_LINK_3,
  ],
});
