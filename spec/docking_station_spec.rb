require 'docking_station'

#Unit test for release_bike
describe DockingStation do
  it { is_expected.to respond_to :release_bike }
  
  it 'releases working bikes' do
    bike = subject.release_bike
    expect(bike).to be_working
  end
end

#Unit test to dock bike
describe DockingStation do
  
  it {is_expected.to respond_to(:dock).with(1).argument }

  it 'docks something' do
    bike = Bike.new
    #we want to return a bike we dock
    expect(subject.dock(bike)).to eq bike
  end
end

#unit test for bike
describe DockingStation do
  it { is_expected.to respond_to(:bike) }
end 

describe DockingStation do

  it 'returns docked bikes' do
    bike = Bike.new
    subject.dock(bike)
    #we need to return the bike we just docked
    expect(subject.bike).to eq bike
  end
end