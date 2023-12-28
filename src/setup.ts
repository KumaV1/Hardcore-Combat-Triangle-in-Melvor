import '../assets/Logo.png'

export async function setup(ctx: Modding.ModContext) {
    // @ts-ignore Typescript, for some reason, thinks this is a method patch, despite working without issue in the end
    ctx.patch(Player, "activeTriangle").get(function (original) {
        return combatTriangle[CombatTriangles.Hardcore];
    });
}