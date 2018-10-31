describe("helloworld.jsのテスト", function(){
  it("文字列を返す", function(){
    expect(helloworld()).toEqual("Hello,World!");
  });
});