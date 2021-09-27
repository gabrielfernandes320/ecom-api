export default interface IWriteRepository<T> {
    remove(id: string): Promise<void>;
}
