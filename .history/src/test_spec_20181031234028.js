describe('足し算', function(){
  it('1 + 5 = 6になる', function(){
    expect(add(1,5)).toBe(6);
  });
});

describe("Helloと言うだけ", function(){
  it("Helloと言う", function(){
    expect(sayHello()).toEqual("Hey");
  });
});