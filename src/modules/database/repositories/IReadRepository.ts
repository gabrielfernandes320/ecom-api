export default interface IReadRepository<T> {
    findById(id: string): Promise<T | null>;
}
