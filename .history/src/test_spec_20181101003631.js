describe('足し算', function(){
  it('1 + 5 = 6になる', function(){
    expect(add(1,5)).toBe(6);
  });
});

describe("Helloと言うだけ", function(){
  it("Helloと言う", function(){
    expect(sayHello()).toEqual("Hello");
  });
});

describe("FuzzBuzzのテスト", function(){
  beforeEach(function(){
    fuzzBuzz(0);
  });
  it("3で割り切れる", function(){
    expect(fuzzBuzz(3)).toEqual("Fuzz");
  });
  it("5で割り切れる", function(){
    expect(fuzzBuzz(20)).toEqual("Buzz");
  });
  it("3でも5でも割り切れる", function(){
    expect(fuzzBuzz(15)).toEqual("FuzzBuzz");
  });
  it("3でも5でも割り切れない", function(){
    expect(fuzzBuzz(19)).toEqual(19);
  });

});