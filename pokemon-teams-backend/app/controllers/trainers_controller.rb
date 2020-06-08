class TrainersController < ApplicationController
    def index
        @trainers = Trainer.all
        # serialization
        # byebug
        render json: @trainers
        # render json: @trainers, only: [:name], include: :pokemons
      end
end
